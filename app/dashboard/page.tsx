import { createClient } from "@/lib/supabase/supabase-server";
import { cookies } from "next/headers";

export const metadata = {
	title: "Boilerplate | Dashboard",
	description: "A boilerplate project with landing, auth, and dashboard",
};

export default async function Dashboard() {
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

	return (
		<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">Content</div>
	);
}
