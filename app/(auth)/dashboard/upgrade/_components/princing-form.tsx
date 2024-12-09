import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { createClient } from "@/lib/supabase/supabase-server";
import { getUserCurrentPlan } from "@/services/stripe";
import { cookies } from "next/headers";
import { createCheckoutSessionAction } from "../actions";

export async function PricingForm() {
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

	const plan = await getUserCurrentPlan(user.id);

	return (
		<form action={createCheckoutSessionAction}>
			<div className="space-y-4">
				<Card className="">
					<CardContent className="p-6">
						<div className="space-y-4">
							<div>
								<h3 className="text-sm font-medium mb-1">Uso do Plano</h3>
								<p className="text-sm text-muted-foreground mb-4">
									Você está atualmente no{" "}
									<span className="uppercase font-bold">{plan.name}</span>.
								</p>
							</div>

							{/* Usage Metric */}
							<div className="space-y-2">
								<div className="flex items-center justify-between text-sm">
									<span>
										{plan.quota.REQUESTS.current}/
										{plan.quota.REQUESTS.available}
									</span>
									<span className="text-muted-foreground">
										{plan.quota.REQUESTS.usage}%
									</span>
								</div>
								<Progress value={plan.quota.REQUESTS.usage} className="h-1" />
							</div>

							<div className="pt-2 flex justify-between items-center">
								{plan.name === "pro" ? (
									<Button variant="outline" type="submit">
										Gerenciar meu Plano!
									</Button>
								) : (
									<>
										<p className="text-sm mb-2">
											Para um maior limite, assine o{" "}
											<span className="font-bold uppercase">PRO</span>.
										</p>
										<Button variant="outline" type="submit">
											Assine por R$9/mês
										</Button>
									</>
								)}
							</div>
						</div>
					</CardContent>
				</Card>
			</div>
		</form>
	);
}
