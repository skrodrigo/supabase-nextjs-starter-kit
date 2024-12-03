"use server";

import { supabaseServer } from "@/lib/supabase/supabase-server";
import { createCheckoutSession } from "@/services/stripe";
import { redirect } from "next/navigation";

export async function createCheckoutSessionAction(): Promise<void> {
	const supabase = supabaseServer();

	const {
		data: { session },
	} = await supabase.auth.getSession();

	if (!session?.user.id) throw new Error("Usuário não autorizado");

	const checkoutSession = await createCheckoutSession(
		session.user.id as string,
		session.user.email as string,
		session.user.stripeSubscriptionId as string,
	);

	if (!checkoutSession?.url) {
		throw new Error("Erro ao gerar URL da sessão de checkout");
	}

	redirect(checkoutSession.url);
}
