export const config = {
	stripe: {
		publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
		secretKey: process.env.STRIPE_SECRET_KEY,
		webhookSecret: process.env.STRIPE_WEBHOOK_SECRET,
		plans: {
			free: {
				priceId: "price_1QRxxSRtVgN95LMdAlVvEeqO",
				quota: {
					TASKS: 5,
				},
			},
			pro: {
				priceId: "price_1QRxy0RtVgN95LMdUvwB1Qpu",
				quota: {
					TASKS: 100,
				},
			},
		},
	},
};
