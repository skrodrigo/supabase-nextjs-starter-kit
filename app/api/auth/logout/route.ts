"use server";

import { supabase } from "@/lib/supabase-client";
import { serialize } from "cookie";

export async function POST(req: Request) {
	try {
		// Logout usando Supabase
		const { error } = await supabase.auth.signOut();

		if (error) {
			return new Response(
				JSON.stringify({ message: "Logout failed", error: error.message }),
				{ status: 401 },
			);
		}

		// Expiração do cookie
		const cookie = serialize("sb-access-token", "", {
			httpOnly: true,
			secure: process.env.NODE_ENV === "production",
			sameSite: "strict", // Segurança adicional
			maxAge: -1, // Expira o cookie imediatamente
			path: "/",
		});

		return new Response(JSON.stringify({ message: "Logout successful" }), {
			status: 200,
			headers: { "Set-Cookie": cookie },
		});
	} catch (err) {
		console.error("Unexpected error during logout:", err);
		return new Response(JSON.stringify({ message: "Internal server error" }), {
			status: 500,
		});
	}
}
