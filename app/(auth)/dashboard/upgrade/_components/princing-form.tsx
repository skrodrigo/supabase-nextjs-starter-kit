import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Switch } from "@/components/ui/switch";
import { ArrowRight } from "lucide-react";

interface UsageMetric {
	label: string;
	current: number;
	max: number;
}

const usageMetrics: UsageMetric[] = [
	{
		label: "Links",
		current: 0,
		max: 5,
	},
	{
		label: "Contacts",
		current: 0,
		max: 100,
	},
	{
		label: "Membros no time",
		current: 1,
		max: 1,
	},
];

const plans = [
	{
		name: "Creator",
		price: "R$ 270,00",
		period: "/ano",
		features: [
			"Até 1,000 links",
			"Até 10,000 contatos",
			"Até 5 membros no time",
		],
	},
	{
		name: "Startup",
		price: "R$ 470,00",
		period: "/ano",
		features: [
			"Até 1,000 links",
			"Até 100,000 contatos",
			"Até 10 membros no time",
		],
	},
];

export function PricingForm() {
	return (
		<div className="space-y-4">
			<Card className="bg-muted/80">
				<CardContent className="p-6 space-y-8">
					<div>
						<div className="flex items-center justify-between mb-4">
							<div>
								<h3 className="font-semibold">Free</h3>
								<p className="text-sm text-muted-foreground">R$ 0,00 /mês</p>
							</div>
							<Button variant="outline" className="h-8">
								Gerenciar meu plano
							</Button>
						</div>

						{/* Usage Metrics */}
						<div className="space-y-4">
							{usageMetrics.map((metric) => (
								<div key={metric.label} className="space-y-2">
									<div className="flex items-center justify-between text-sm">
										<span>{metric.label}</span>
										<span className="text-muted-foreground">
											{metric.current} / {metric.max}
										</span>
									</div>
									<Progress
										value={(metric.current / metric.max) * 100}
										className="h-2"
									/>
								</div>
							))}
						</div>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
