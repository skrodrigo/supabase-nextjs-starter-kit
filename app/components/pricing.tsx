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
		name: "Básico",
		price: "Grátis",
		features: [
			{ text: "Autenticação de usuários", included: false },
			{ text: "Dashboard básico", included: false },
			{ text: "Temas claro e escuro", included: false },
			{ text: "1 projeto", included: false },
			{ text: "Suporte da comunidade", included: false },
			{ text: "Atualizações limitadas", included: false },
		],
	},
	{
		name: "Pro",
		price: "R$ 397,90",
		features: [
			{ text: "Todas as features do Básico", included: true },
			{ text: "Dashboard", included: true },
			{ text: "Projetos ilimitados", included: true },
			{ text: "Suporte prioritário", included: true },
			{ text: "Atualizações ilimitadas", included: true },
			{ text: "Acesso antecipado a novidades", included: true },
		],
	},
	{
		name: "Empresarial",
		price: "R$ ?",
		features: [
			{ text: "Todas as features do Pro", included: true },
			{ text: "Customização completa", included: true },
			{ text: "Integrações avançadas", included: true },
			{ text: "Treinamento personalizado", included: true },
			{ text: "SLA garantido", included: true },
			{ text: "Ambiente de staging", included: true },
		],
	},
];

export function Pricing() {
	return (
		<section className="container mx-auto px-4 py-24">
			<div className="mb-16 max-w-2xl mx-auto text-center">
				<h4 className="text-sm font-semibold text-primary mb-2">Planos</h4>
				<h2 className="text-3xl font-bold mb-4">
					Escolha o Plano Perfeito para o Seu Projeto
				</h2>
				<p className="text-muted-foreground">
					Acelere o desenvolvimento do seu próximo projeto com nosso
					boilerplate. Oferecemos opções flexíveis para atender às necessidades
					de desenvolvedores individuais até grandes equipes.
				</p>
			</div>

			<div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto">
				{plans.map((plan) => (
					<Card key={plan.name} className="flex flex-col">
						<CardHeader>
							<CardTitle>{plan.name}</CardTitle>
							<div className="text-3xl font-bold">
								{plan.price}
								<span className="text-xl font-normal text-muted-foreground">
									{plan.price !== "Grátis" ? " / mês" : ""}
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
							{/* TODO: Remove this condition to enable all buttons */}
							<Button
								className="w-full"
								disabled={plan.name === "Básico" || plan.name === "Empresarial"}
							>
								Começar Agora
							</Button>
						</CardFooter>
					</Card>
				))}
			</div>
		</section>
	);
}
