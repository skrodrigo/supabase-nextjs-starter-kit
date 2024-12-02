"use server";

import { supabase } from "@/lib/supabaseClient"; // Importe sua configuração do Supabase
import { serialize } from "cookie";

export async function POST(req: Request) {
	try {
		// Parse e validação dos dados recebidos
		const { email, password } = await req.json();
		if (!email || !password) {
			return new Response(
				JSON.stringify({ message: "Email and password are required" }),
				{ status: 400 },
			);
		}

		// Login usando Supabase
		const { data, error } = await supabase.auth.signInWithPassword({
			email,
			password,
		});

		if (error) {
			return new Response(
				JSON.stringify({ message: "Login failed", error: error.message }),
				{ status: 401 },
			);
		}

		const token = data.session?.access_token;
		if (!token) {
			return new Response(
				JSON.stringify({
					message: "Token not received",
					data, // Diagnóstico adicional durante desenvolvimento
				}),
				{ status: 400 },
			);
		}

		// Configuração do cookie com o token de acesso
		const cookie = serialize("sb-access-token", token, {
			httpOnly: true,
			secure: process.env.NODE_ENV === "production",
			sameSite: "strict", // Previne envio de cookies em requisições de terceiros
			maxAge: 60 * 60 * 24 * 7, // 7 dias
			path: "/",
		});

		return new Response(JSON.stringify({ message: "Login successful" }), {
			status: 200,
			headers: { "Set-Cookie": cookie },
		});
	} catch (err) {
		console.error("Unexpected error during login:", err);
		return new Response(JSON.stringify({ message: "Internal server error" }), {
			status: 500,
		});
	}
}
