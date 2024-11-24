import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
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
					{/* Current Plan */}
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

			<Card className="bg-muted/80">
				<CardContent className="p-6 space-y-8">
					{/* Billing Toggle */}
					<div className="space-y-4">
						<div className="flex items-center justify-between">
							<h3 className="font-semibold">Trocar de plano</h3>
							<div className="flex items-center gap-2">
								<span className="text-sm text-muted-foreground">
									Cobrança anual (ganhe um desconto de 2 meses)
								</span>
								<Switch />
							</div>
						</div>
						<div className="grid gap-4">
							{plans.map((plan) => (
								<Card key={plan.name} className="p-4">
									<div className="flex items-center justify-between">
										<div>
											<h4 className="font-semibold">{plan.name}</h4>
											<div className="flex items-baseline gap-1">
												<span className="text-lg font-semibold">
													{plan.price}
												</span>
												<span className="text-sm text-muted-foreground">
													{plan.period}
												</span>
											</div>
										</div>
										<Button className="h-8">
											Upgrade
											<ArrowRight className="ml-2 h-4 w-4" />
										</Button>
									</div>
									<ul className="mt-4 space-y-2">
										{plan.features.map((feature) => (
											<li
												key={feature}
												className="text-sm text-muted-foreground"
											>
												{feature}
											</li>
										))}
									</ul>
								</Card>
							))}
						</div>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
