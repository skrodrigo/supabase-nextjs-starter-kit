"use server";

import { createClient } from "@/lib/supabase/supabase-server";
import { createCheckoutSession } from "@/services/stripe";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function createCheckoutSessionAction(): Promise<void> {
	try {
		const cookieStore = cookies();
		const supabase = createClient(cookieStore);
		const accessToken = cookieStore.get("sb-access-token")?.value;

		if (!accessToken) {
			console.error("Token não encontrado");
			throw new Error("Usuário não autenticado");
		}

		const {
			data: { user },
			error,
		} = await supabase.auth.getUser(accessToken);

		if (error) {
			console.error("Erro ao obter usuário:", error);
			throw new Error("Erro ao obter dados do usuário");
		}

		if (!user) {
			console.error("Usuário não encontrado");
			throw new Error("Usuário não encontrado");
		}

		const checkoutSession = await createCheckoutSession(
			user.id,
			user.email as string,
			user.stripeSubscriptionId as string,
		);

		if (!checkoutSession?.url) {
			console.error("URL da sessão de checkout não gerada");
			throw new Error("Erro ao gerar URL da sessão de checkout");
		}

		console.log("URL da sessão de checkout gerada:", checkoutSession.url);
		redirect(checkoutSession.url);
	} catch (error) {
		console.error("Erro na action:", error);
		throw error;
	}
}
