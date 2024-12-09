"use server";

import { prisma } from "@/lib/prisma";
import { stripe } from "@/lib/stripe";
import { createClient } from "@/lib/supabase/supabase-server";
import { cookies } from "next/headers";

export async function deleteAccountAction() {
	const cookieStore = cookies();
	const supabase = createClient(cookieStore);
	const accessToken = cookieStore.get("sb-access-token")?.value;

	if (!accessToken) {
		console.error("Token não encontrado");
		throw new Error("Usuário não autenticado");
	}

	const { data, error } = await supabase.auth.getUser(accessToken);
	const user = data?.user;

	if (error || !user) {
		console.error("Erro ao obter usuário:", error);
		throw new Error("Erro ao obter dados do usuário");
	}

	const customer = await prisma.user.findUnique({
		where: { id: user.id },
		select: { stripeCustomerId: true },
	});

	// Deletar cliente do Stripe
	if (customer?.stripeCustomerId) {
		try {
			await stripe.customers.del(customer.stripeCustomerId);
		} catch (stripeError) {
			console.error("Erro ao deletar cliente do Stripe:", stripeError);
		}
	}

	// Deletar Requests associadas
	await prisma.request.deleteMany({
		where: { userId: user.id },
	});

	// Deletar usuário no Prisma
	await prisma.user.delete({
		where: { id: user.id },
	});

	// Deletar usuário no Supabase
	try {
		await supabase.auth.admin.deleteUser(user.id);
	} catch (supabaseError) {
		console.error("Erro ao deletar usuário do Supabase:", supabaseError);
	}
}
