import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { supabaseServer } from "@/lib/supabase/supabase-server";
import { getUserCurrentPlan } from "@/services/stripe";
import { createCheckoutSessionAction } from "../actions";

interface UsageMetric {
	current: number;
	max: number;
	current_plan: string;
	next_due_date: string;
}

const usageMetric: UsageMetric = {
	current: 1,
	max: 5,
	current_plan: "Free",
	next_due_date: "2024-01-01",
};

export async function PricingForm() {
	// const supabase = supabaseServer();

	// const {
	// 	data: { session },
	// } = await supabase.auth.getSession();
	// const plan = await getUserCurrentPlan(session?.user.id as string);

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
