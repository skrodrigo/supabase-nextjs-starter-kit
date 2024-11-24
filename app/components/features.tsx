import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart, Bell, Globe, Layout, Link2, Mail } from "lucide-react";

const features = [
	{
		icon: Mail,
		title: "Captação de Leads Sem Esforço",
		description:
			"Colete e-mails automaticamente com portais de link personalizados, projetados para aprimorar seus esforços de geração de leads de forma integrada.",
	},
	{
		icon: Globe,
		title: "Distribuição Global de Links",
		description:
			"Compartilhe seus links mundialmente e alcance um público mais amplo enquanto captura informações valiosas de leads.",
	},
	{
		icon: BarChart,
		title: "Análises em Tempo Real",
		description:
			"Obtenha insights sobre o desempenho do seu link com análises em tempo real, rastreando cliques, conversões e engajamento do público.",
	},
	{
		icon: Bell,
		title: "Notificações Instantâneas",
		description:
			"Receba alertas imediatos sobre novas capturas de leads, possibilitando um rápido acompanhamento e engajamento diretamente do Discord, Slack ou via webhook.",
	},
	{
		icon: Layout,
		title: "Formulários Personalizáveis",
		description:
			"Personalize seus formulários de captura de e-mail para se adequar à identidade visual da sua marca, proporcionando uma experiência de usuário consistente.",
	},
	{
		icon: Link2,
		title: "Compatível com Integrações",
		description:
			"Integre-se de maneira perfeita com seu stack de marketing existente, enriquecendo suas plataformas de CRM e e-mail com novos leads obtidos a partir dos seus links.",
	},
];

export function Features() {
	return (
		<section className="container mx-auto px-4 py-24">
			<div className="text-center mb-16">
				<Badge variant="secondary" className="mb-2">
					Explore Mais Recursos
				</Badge>
				<h2 className="text-3xl font-bold mb-4">
					Descubra todo o potencial do Use Link
				</h2>
			</div>

			<div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
				{features.map((feature) => (
					<Card key={feature.title} className="border-none shadow-none">
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
