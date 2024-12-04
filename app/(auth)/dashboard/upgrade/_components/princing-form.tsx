import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { createClient } from "@/lib/supabase/supabase-server";
import { cookies } from "next/headers";
import { createCheckoutSessionAction } from "../actions";

interface UsageMetric {
	current: number;
	max: number;
	current_plan: string;
}

const usageMetric: UsageMetric = {
	current: 10,
	max: 50,
	current_plan: "free",
};

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

	return (
		<form action={createCheckoutSessionAction}>
			<div className="space-y-4">
				<Card className="bg-muted/50">
					<CardContent className="p-6">
						<div className="space-y-4">
							<div>
								<h3 className="text-sm font-medium mb-1">Uso do Plano</h3>
								<p className="text-sm text-muted-foreground mb-4">
									Você está atualmente no{" "}
									<span className="uppercase font-bold">
										{usageMetric.current_plan}
									</span>
									.
								</p>
							</div>

							{/* Usage Metric */}
							<div className="space-y-2">
								<div className="flex items-center justify-between text-sm">
									<span>
										{usageMetric.current}/{usageMetric.max}
									</span>
									<span className="text-muted-foreground">20%</span>
								</div>
								<Progress
									value={(usageMetric.current / usageMetric.max) * 100}
									className="h-1"
								/>
							</div>

							<div className="pt-2 flex justify-between items-center">
								<p className="text-sm mb-2">
									Para um maior limite, assine o{" "}
									<span className="font-bold uppercase">PRO</span>.
								</p>
								<Button variant="outline" type="submit">
									Assine por R$9/mês
								</Button>
							</div>
						</div>
					</CardContent>
				</Card>
			</div>
		</form>
	);
}
