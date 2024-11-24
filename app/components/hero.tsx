import { Button } from "@/components/ui/button";

export function Hero() {
	return (
		<section className="flex flex-col items-center justify-center px-4 py-24 text-center">
			<div className="container max-w-3xl ">
				<h1 className="mb-6 text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
					Transforme Cada Link em uma Máquina de Gerar Leads
				</h1>
				<p className="mb-8 text-lg text-muted-foreground">
					Diga adeus às oportunidades perdidas. Com o Use Link, transforme
					qualquer link compartilhado em um ativo estratégico para coletar leads
					valiosos e expandir sua audiência sem esforço.
				</p>
				<Button size="lg">Começar agora</Button>
			</div>
		</section>
	);
}
