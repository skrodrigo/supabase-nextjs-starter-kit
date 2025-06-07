import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Layers, Palette, Rocket, Shield, Zap } from "lucide-react";

const features = [
	{
		icon: Code,
		title: "Código Limpo e Escalável",
		description:
			"Estrutura de código organizada e modular, facilitando a manutenção e expansão do seu projeto conforme ele cresce.",
	},
	{
		icon: Palette,
		title: "Design Responsivo",
		description:
			"Interface adaptável a todos os dispositivos, garantindo uma experiência de usuário consistente em desktops, tablets e smartphones.",
	},
	{
		icon: Shield,
		title: "Autenticação Segura",
		description:
			"Sistema de autenticação robusto implementado, protegendo os dados dos usuários e garantindo acesso seguro às funcionalidades.",
	},
	{
		icon: Zap,
		title: "Performance Otimizada",
		description:
			"Carregamento rápido e eficiente, proporcionando uma experiência fluida aos usuários, mesmo em conexões mais lentas.",
	},
	{
		icon: Layers,
		title: "Componentes Reutilizáveis",
		description:
			"Biblioteca de componentes prontos para uso, acelerando o desenvolvimento e mantendo a consistência visual em todo o projeto.",
	},
	{
		icon: Rocket,
		title: "Fácil Deployment",
		description:
			"Configuração otimizada para deploy rápido em diversas plataformas, permitindo que seu projeto esteja online em minutos.",
	},
];

export function Features() {
	return (
		<section className="container mx-auto px-4 py-24 max-w-7xl">
			<div className="flex justify-center mb-8">
				<Badge variant="secondary" className="mb-2 border border-zinc-200">
					Funcionalidades
				</Badge>
			</div>
			<div className="text-center space-y-4 mb-12">
				<h2 className="text-balance text-3xl font-semibold md:text-4xl">Recursos Poderosos</h2>
				<p className="text-muted-foreground">Acelere seu desenvolvimento com recursos avançados e prontos para uso.</p>
			</div>

			<div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
				{features.map((feature) => (
					<Card key={feature.title} className="border-none">
						<CardContent className="pt-6">
							<div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
								<feature.icon className="h-6 w-6 text-primary" />
							</div>
							<h3 className="mb-2 font-semibold">{feature.title}</h3>
							<p className="text-sm text-muted-foreground">
								{feature.description}
							</p>
						</CardContent>
					</Card>
				))}
			</div>
		</section>
	);
}
