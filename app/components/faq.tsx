import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
	{
		question: "O que é Use Link?",
		answer:
			"Use Link é uma plataforma que permite transformar seus links em ferramentas de captação de leads.",
	},
	{
		question: "Como o Use Link funciona?",
		answer:
			"O Use Link cria uma camada de captura de leads sobre seus links compartilhados.",
	},
	{
		question: "Posso personalizar o formulário de captura de e-mail?",
		answer:
			"Sim, você pode personalizar completamente o formulário de acordo com sua marca.",
	},
	{
		question: "O que acontece com os e-mails coletados?",
		answer:
			"Os e-mails são armazenados com segurança e podem ser exportados ou integrados com suas ferramentas de marketing.",
	},
	{
		question: "O Use Link se integra com outras plataformas?",
		answer:
			"Sim, oferecemos integrações com as principais ferramentas de marketing e CRM.",
	},
	{
		question: "Existe um limite para o número de links que posso criar?",
		answer:
			"O limite depende do seu plano. Confira nossa página de preços para mais detalhes.",
	},
	{
		question: "Como posso acompanhar o desempenho dos meus links?",
		answer: "Oferecemos um dashboard completo com análises em tempo real.",
	},
	{
		question: "Como eu começo a usar o Use Link?",
		answer: "Basta se registrar gratuitamente e começar a criar seus links.",
	},
];

export function FAQ() {
	return (
		<section className="container mx-auto px-4 py-24">
			<div className="max-w-4xl flex flex-col mx-auto md:flex-row md:items-center md:justify-between gap-12">
				<div className="mb-12">
					<h2 className="text-3xl font-bold mb-6 md:mb-0">
						Perguntas Frequentes: Suas Dúvidas Esclarecidas
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
