import Stripe from "stripe";

import { config } from "@/app/config";
import { prisma } from "@/lib/prisma";

export const stripe = new Stripe(config.stripe.secretKey as string, {
	apiVersion: "2024-11-20.acacia",
	httpClient: Stripe.createFetchHttpClient(),
});

export const getStripeCustomerByEmail = async (email: string) => {
	const customers = await stripe.customers.list({ email });
	return customers.data[0];
};

export const createStripeCustomer = async (input: {
	name?: string;
	email: string;
}) => {
	const customer = await getStripeCustomerByEmail(input.email);
	if (customer) return customer;

	const createdCustomer = await stripe.customers.create({
		email: input.email,
		name: input.name,
	});

	const createdCustomerSubscription = await stripe.subscriptions.create({
		customer: createdCustomer.id,
		items: [{ price: config.stripe.plans.free.priceId }],
	});

	await prisma.user.update({
		where: {
			email: input.email,
		},
		data: {
			stripeCustomerId: createdCustomer.id,
			stripeSubscriptionId: createdCustomerSubscription.id,
			stripeSubscriptionStatus: createdCustomerSubscription.status,
			stripePriceId: config.stripe.plans.free.priceId,
		},
	});

	return createdCustomer;
};

export const createCheckoutSession = async (
	userId: string,
	userEmail: string,
	userStripeSubscriptionId: string,
) => {
	try {
		// Verifica se o usuário tem um cliente associado no Stripe
		const user = await prisma.user.findUnique({
			where: { id: userId },
			select: { stripeCustomerId: true },
		});

		if (!user?.stripeCustomerId) {
			throw new Error("Stripe customer ID not found for user");
		}

		// const subscription = await stripe.subscriptionItems.list({
		// 	subscription: userStripeSubscriptionId as string,
		// 	limit: 1,
		// });

		// Cria uma sessão do portal de faturamento para o cliente
		const session = await stripe.billingPortal.sessions.create({
			customer: user.stripeCustomerId,
			return_url: "http://localhost:3000/dashboard/",
			// flow_data: {
			// 	type: "subscription_update_confirm",
			// 	after_completion: {
			// 		type: "redirect",
			// 		redirect: {
			// 			return_url: "http://localhost:3000/",
			// 		},
			// 	},
			// 	subscription_update_confirm: {
			// 		subscription: userStripeSubscriptionId,
			// 		items: [
			// 			{
			// 				id: subscription.data[0].id,
			// 				quantity: 1,
			// 				price: config.stripe.plans.pro.priceId,
			// 			},
			// 		],
			// 	},
			// },
		});

		return { url: session.url };
	} catch (error) {
		console.error("Error creating checkout session:", error);
		throw new Error("Failed to create checkout session");
	}
};

export const handleProcessWebhookUpdatedSubscription = async (event: {
	object: Stripe.Subscription;
}) => {
	const stripeCustomerId = event.object.customer as string;
	const stripeSubscriptionId = event.object.id as string;
	const stripeSubscriptionStatus = event.object.status;
	const stripePriceId = event.object.items.data[0].price.id;

	const userExists = await prisma.user.findFirst({
		where: {
			OR: [
				{
					stripeSubscriptionId,
				},
				{
					stripeCustomerId,
				},
			],
		},
		select: {
			id: true,
		},
	});

	if (!userExists) {
		throw new Error("user of stripeCustomerId not found");
	}

	await prisma.user.update({
		where: {
			id: userExists.id,
		},
		data: {
			stripeCustomerId,
			stripeSubscriptionId,
			stripeSubscriptionStatus,
			stripePriceId,
		},
	});
};

type Plan = {
	priceId: string;
	quota: {
		REQUESTS: number;
	};
};

type Plans = {
	[key: string]: Plan;
};

export const getPlanByPrice = (priceId: string) => {
	const plans: Plans = config.stripe.plans;

	const planKey = Object.keys(plans).find(
		(key) => plans[key].priceId === priceId,
	) as keyof Plans | undefined;

	const plan = planKey ? plans[planKey] : null;

	if (!plan) {
		throw new Error(`Plan not found for priceId: ${priceId}`);
	}

	return {
		name: planKey,
		quota: plan.quota,
	};
};

export const getUserCurrentPlan = async (userId: string) => {
	const user = await prisma.user.findUnique({
		where: {
			id: userId,
		},
		select: {
			stripePriceId: true,
		},
	});

	if (!user || !user.stripePriceId) {
		throw new Error("User or user stripePriceId not found");
	}

	const plan = getPlanByPrice(user.stripePriceId);

	const requestsCount = await prisma.request.count({
		where: {
			userId,
		},
	});

	const availableRequests = plan.quota.REQUESTS;
	const currentRequests = requestsCount;
	const usage = (currentRequests / availableRequests) * 100;

	return {
		name: plan.name,
		quota: {
			REQUESTS: {
				available: availableRequests,
				current: currentRequests,
				usage,
			},
		},
	};
};
