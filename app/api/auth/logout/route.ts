import { supabase } from "@/lib/supabaseClient";
import { serialize } from "cookie";

export async function DELETE(req: Request) {
	const { error } = await supabase.auth.signOut();

	if (error) {
		return new Response(JSON.stringify({ message: "Logout failed" }), {
			status: 401,
		});
	}

	// Limpa o cookie
	const cookie = serialize("sb-access-token", "", {
		httpOnly: true,
		secure: process.env.NODE_ENV === "production", // Use HTTPS em produção
		maxAge: -1, // Expira o cookie
		path: "/",
	});

	return new Response(JSON.stringify({ message: "Logout successful" }), {
		status: 200,
		headers: {
			"Set-Cookie": cookie, // Envia o cookie expirado
		},
	});
}
