import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
	return (
		<section className="flex flex-col items-center justify-center px-4 py-24 text-center">
			<div className="container max-w-4xl">
				<h1 className="mb-6 text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
					Acelere seu Desenvolvimento com esse Boilerplate Completo
				</h1>
				<p className="mb-8 text-lg text-muted-foreground">
					Economize tempo e recursos com nosso boilerplate pronto para uso.
					Inclui landing page, autenticação e dashboard, permitindo que você
					foque no que realmente importa: construir funcionalidades únicas para
					seu projeto.
				</p>
				<Button size="lg">
					Começar Agora
					<ArrowRight className="h-4 w-4" />
				</Button>
			</div>
		</section>
	);
}
