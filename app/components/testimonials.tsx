import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
	{
		content:
			"Este boilerplate acelerou significativamente nosso desenvolvimento. A estrutura bem organizada e os componentes pré-construídos nos permitiram focar nas funcionalidades únicas do nosso produto.",
		author: "Ana Silva",
		role: "CTO da TechInova",
	},
	{
		content:
			"A integração de autenticação e dashboard já prontos economizou semanas de desenvolvimento. É incrível como pudemos personalizar tudo para nossa marca tão facilmente.",
		author: "Carlos Mendes",
		role: "Líder de Projeto na WebSolutions",
	},
	{
		content:
			"Como startup, tempo é crucial. Este boilerplate nos deu uma vantagem competitiva, pudemos personalizar tudo para nossa marca, permitindo lançar nosso MVP muito mais rápido do que imaginávamos.",
		author: "Luana Costa",
		role: "Fundadora da QuickStart",
	},
];

export function Testimonials() {
	return (
		<section className="container mx-auto px-4 py-24">
			<div className="text-center mb-16">
				<Badge variant="secondary" className="mb-2">
					Depoimentos
				</Badge>
				<h2 className="text-3xl font-bold mb-4">
					Desenvolvedores{" "}
					<span className="text-muted-foreground">Satisfeitos</span>
				</h2>
				<p className="text-muted-foreground">
					Veja como nosso boilerplate está transformando projetos
				</p>
			</div>

			<div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
				{testimonials.map((testimonial) => (
					<Card
						key={testimonial.author}
						className="border bg-muted/50 shadow-none"
					>
						<CardContent className="pt-6">
							<p className="mb-6 text-muted-foreground">
								"{testimonial.content}"
							</p>
							<div>
								<p className="font-semibold">{testimonial.author}</p>
								<p className="text-sm text-muted-foreground">
									{testimonial.role}
								</p>
							</div>
						</CardContent>
					</Card>
				))}
			</div>
		</section>
	);
}
