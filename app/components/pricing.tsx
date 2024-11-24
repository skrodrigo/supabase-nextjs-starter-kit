import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Check, X } from "lucide-react";

const plans = [
	{
		name: "Free",
		price: "R$ 0,00",
		features: [
			{ text: "5 links", included: true },
			{ text: "100 contatos", included: true },
			{ text: "Integrações de terceiros", included: false },
			{ text: "1 membro no time", included: true },
			{ text: "Suporte por e-mail", included: true },
			{ text: "Suporte prioritário", included: true },
		],
	},
	{
		name: "Startup",
		price: "R$ 47,00",
		features: [
			{ text: "1,000 links", included: true },
			{ text: "100,000 contatos", included: true },
			{ text: "Integrações de terceiros", included: true },
			{ text: "10 membros no time", included: true },
			{ text: "Suporte por e-mail", included: true },
			{ text: "Suporte prioritário", included: true },
		],
	},
	{
		name: "Creator",
		price: "R$ 27,00",
		features: [
			{ text: "1,000 links", included: true },
			{ text: "10,000 contatos", included: true },
			{ text: "Integrações de terceiros", included: true },
			{ text: "5 membros no time", included: true },
			{ text: "Suporte por e-mail", included: true },
			{ text: "Suporte prioritário", included: true },
		],
	},
];

export function Pricing() {
	return (
		<section className="container mx-auto px-4 py-24">
			<div className="mb-16 max-w-2xl mx-auto text-center">
				<h4 className="text-sm font-semibold text-primary mb-2">Preços</h4>
				<h2 className="text-3xl font-bold mb-4">
					Maximize a Geração de Leads com Preços Transparentes.
				</h2>
				<p className="text-muted-foreground">
					Desbloqueie o potencial total de cada link com os planos de preços do
					Use Link, projetados para empresas de todos os tamanhos. Selecione o
					pacote que melhor se adapta aos seus objetivos de geração de leads.
				</p>
			</div>

			<div className="grid gap-8 sm:grid-cols-1  md:grid-cols-3 max-w-7xl mx-auto">
				{plans.map((plan) => (
					<Card key={plan.name} className="flex flex-col">
						<CardHeader>
							<CardTitle>{plan.name}</CardTitle>
							<div className="text-3xl font-bold">
								{plan.price}
								<span className="text-xl font-normal text-muted-foreground">
									{" "}
									/ mo
								</span>
							</div>
						</CardHeader>
						<CardContent className="flex-1">
							<ul className="space-y-4">
								{plan.features.map((feature) => (
									<li key={feature.text} className="flex items-center gap-2">
										{feature.included ? (
											<Check className="h-4 w-4 text-primary" />
										) : (
											<X className="h-4 w-4 text-muted-foreground" />
										)}
										<span
											className={
												feature.included ? "" : "text-muted-foreground"
											}
										>
											{feature.text}
										</span>
									</li>
								))}
							</ul>
						</CardContent>
						<CardFooter>
							<Button className="w-full">Get Started</Button>
						</CardFooter>
					</Card>
				))}
			</div>
		</section>
	);
}
