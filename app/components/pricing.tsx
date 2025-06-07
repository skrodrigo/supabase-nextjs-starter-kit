import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";

const freeFeatures = [
	{ text: "Funcionalidades básicas do boilerplate", limited: true },
	{ text: "Componentes essenciais", limited: true },
	{ text: "Temas personalizáveis", limited: true },
	{ text: "Suporte premium da comunidade", limited: false },
	{ text: "Suporte 24/7 (resposta em até 48 horas)", limited: false },
	{ text: "Integrações avançadas", limited: true },
	{ text: "Exportação de configurações", limited: true },
	{ text: "Integração com ferramentas externas", limited: true },
];

const premiumFeatures = [
	"Acesso completo ao boilerplate",
	"Todos os componentes disponíveis",
	"Temas personalizáveis avançados",
	"Suporte premium da comunidade",
	"Suporte 24/7 (resposta em até 1 hora)",
	"Integrações avançadas",
	"Exportação de configurações",
	"Integração com ferramentas externas"
];

export function Pricing() {
	return (
		<section className="mx-auto px-4 max-w-screen-xl py-10 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/bg.svg')" }}>
			<div className="flex justify-center mb-8">
				<Badge variant="secondary" className="mb-2 border border-zinc-200">
					Planos
				</Badge>
			</div>

			<div className="text-center space-y-4 mb-12">
				<h2 className="text-balance text-3xl font-semibold md:text-4xl">Escolha o plano ideal para você</h2>
				<p className="text-muted-foreground">Seja o sucesso que você merece. Escolha o plano ideal para você.</p>
			</div>

			<div className="max-w-7xl mx-auto">
				<div className="flex flex-col lg:flex-row max-w-6xl mx-auto items-center justify-center gap-8">
					<article className="w-full max-w-md h-full flex px-4 py-6 flex-col items-center justify-between rounded-lg bg-card border border-border">
						<div className="text-center space-y-6">
							<header>
								<h3 className="text-2xl font-bold text-foreground">Plano Free</h3>
								<div className="mt-4">
									<p className="text-4xl font-extrabold text-foreground">
										<span className="text-3xl align-top">R$</span>0
									</p>
									<span className="text-muted-foreground text-sm">para sempre</span>
								</div>
							</header>
							<ul className="mt-6 space-y-3 text-left">
								{freeFeatures.map((feature) => (
									<li key={feature.text} className="flex items-center text-muted-foreground">
										{feature.limited ? (
											<X className="w-5 h-5 text-destructive mr-3 flex-shrink-0" />
										) : (
											<Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
										)}
										<span className="text-sm">{feature.text}</span>
									</li>
								))}
							</ul>
							<Button className="w-full" variant="outline">
								Começar Grátis
							</Button>
						</div>
						<div className="flex items-center justify-center space-x-2 mt-2 text-muted-foreground opacity-0">
							<a href="https://stripe.com" target="_blank" rel="noopener noreferrer">
								<span className="inline-flex items-center hover:bg-accent transition-colors duration-700 cursor-pointer gap-2 px-3 py-1 text-sm bg-muted border border-border hover:border-accent-foreground rounded-full">
									<span className="text-muted-foreground">Não é necessário pagamento</span>
								</span>
							</a>
						</div>
					</article>

					<article className="w-full max-w-md h-full flex px-4 py-6 flex-col items-center justify-between rounded-lg bg-card border border-border">
						<div className="absolute top-0 right-0 -mt-4 -mr-4"></div>
						<div className="text-center space-y-6">
							<header>
								<h3 className="text-2xl font-bold text-foreground">Pro Mensal</h3>
								<div className="mt-4">
									<p className="text-4xl font-extrabold text-foreground">
										<span className="text-3xl align-top">R$</span>39,90
									</p>
									<span className="text-muted-foreground text-sm">por mês</span>
								</div>
							</header>
							<ul className="mt-6 space-y-3 text-left">
								{premiumFeatures.map((feature) => (
									<li key={feature} className="flex items-center text-muted-foreground">
										<Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
										<span className="text-sm">{feature}</span>
									</li>
								))}
							</ul>
							<Button className="w-full">
								7 dias grátis
							</Button>
						</div>
						<div className="flex items-center justify-center space-x-2 mt-2 text-muted-foreground">
							<a href="https://stripe.com" target="_blank" rel="noopener noreferrer">
								<span className="inline-flex items-center hover:bg-accent transition-colors duration-700 cursor-pointer gap-2 px-3 py-1 text-sm bg-muted border border-border hover:border-accent-foreground rounded-full">
									<span className="text-muted-foreground">Compra segura</span>
								</span>
							</a>
						</div>
					</article>

					<article className="relative w-full max-w-md flex px-4 py-6 flex-col items-center justify-center rounded-lg bg-card border-2 border-primary">
						<div className="absolute top-0 right-0 -mt-4 -mr-4">
							<span className="inline-flex items-center px-4 py-2 text-xs text-white bg-primary rounded-full shadow-sm">
								Economize até R$120,00
							</span>
						</div>
						<div className="text-center space-y-6">
							<header>
								<h3 className="text-2xl font-bold text-foreground">Pro Anual</h3>
								<div className="mt-4">
									<p className="text-4xl font-extrabold text-foreground">
										<span className="text-3xl align-top">R$</span>29,90
									</p>
									<span className="text-muted-foreground text-sm">por mês</span>
								</div>
							</header>
							<ul className="mt-6 space-y-3 text-left">
								{premiumFeatures.map((feature) => (
									<li key={feature} className="flex items-center text-muted-foreground">
										<Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
										<span className="text-sm">{feature}</span>
									</li>
								))}
							</ul>
							<Button className="w-full">
								7 dias grátis
							</Button>
						</div>
						<div className="flex items-center justify-center space-x-2 mt-2 text-muted-foreground">
							<a href="https://stripe.com" target="_blank" rel="noopener noreferrer">
								<span className="inline-flex items-center hover:bg-accent transition-colors duration-700 cursor-pointer gap-2 px-3 py-1 text-sm bg-muted border border-border hover:border-accent-foreground rounded-full">
									<span className="text-muted-foreground">Compra segura</span>
								</span>
							</a>
						</div>
					</article>
				</div>
				<div className="mt-3 text-center text-sm text-muted-foreground">
					<p>Garantia de 7 dias. Cancele a qualquer momento.</p>
				</div>
			</div>
		</section>
	);
}
