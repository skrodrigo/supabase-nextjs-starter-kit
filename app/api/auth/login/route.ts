import { supabase } from "@/lib/supabaseClient"; // Importe sua configuração do Supabase
import { serialize } from "cookie";

export async function POST(req: Request) {
	const { email, password } = await req.json();

	const { data, error } = await supabase.auth.signInWithPassword({
		email,
		password,
	});

	if (error) {
		return new Response(JSON.stringify({ message: "Login failed" }), {
			status: 401,
		});
	}

	const token = data.session?.access_token;

	if (token) {
		// Define o cookie com o token de acesso
		const cookie = serialize("sb-access-token", token, {
			httpOnly: true, // Acessível apenas via HTTP (não pode ser acessado via JavaScript)
			secure: process.env.NODE_ENV === "production", // Usa HTTPS em produção
			maxAge: 60 * 60 * 24 * 7, // 7 dias
			path: "/",
		});

		return new Response(JSON.stringify({ message: "Login successful" }), {
			status: 200,
			headers: {
				"Set-Cookie": cookie,
			},
		});
	}

	return new Response(JSON.stringify({ message: "Token not received" }), {
		status: 400,
	});
}
