import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
	{
		question: "O que é este Boilerplate?",
		answer:
			"Este Boilerplate é uma estrutura inicial completa para projetos web modernos, incluindo landing page, autenticação e dashboard.",
	},
	{
		question: "Quais tecnologias são utilizadas?",
		answer:
			"Utilizamos Next.js, React, TypeScript, Tailwind CSS e outras bibliotecas modernas para garantir uma base sólida e escalável.",
	},
	{
		question: "O Boilerplate é personalizável?",
		answer:
			"Sim, todos os componentes e estilos são facilmente customizáveis para se adequar às necessidades específicas do seu projeto.",
	},
	{
		question: "Como posso começar a usar o Boilerplate?",
		answer:
			"Basta clonar o repositório, instalar as dependências e começar a desenvolver. Temos uma documentação detalhada para guiá-lo.",
	},
	{
		question: "O Boilerplate inclui recursos de autenticação?",
		answer:
			"Sim, oferecemos um sistema de autenticação completo e seguro, pronto para uso em produção.",
	},
	{
		question: "Posso usar este Boilerplate para projetos comerciais?",
		answer:
			"Absolutamente! Este Boilerplate é open-source e pode ser usado em projetos pessoais ou comerciais.",
	},
	{
		question: "Como o dashboard está estruturado?",
		answer:
			"O dashboard inclui layouts responsivos, componentes reutilizáveis e exemplos de integração de dados.",
	},
];

export function FAQ() {
	return (
		<section className="container mx-auto px-4 py-24">
			<div className="max-w-4xl flex flex-col mx-auto md:flex-row md:items-center md:justify-between gap-12">
				<div className="mb-12">
					<h2 className="text-3xl font-bold mb-6 md:mb-0">
						Perguntas Frequentes: Tudo Sobre o Boilerplate
					</h2>
				</div>
				<Accordion type="single" collapsible className="w-full">
					{faqs.map((faq, index) => (
						<AccordionItem key={faq.question} value={`item-${index}`}>
							<AccordionTrigger>{faq.question}</AccordionTrigger>
							<AccordionContent>{faq.answer}</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</div>
		</section>
	);
}
