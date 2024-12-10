import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function CTA() {
	return (
		<section className="container mx-auto px-4 py-24">
			<div className="flex flex-col items-center justify-center rounded-2xl px-6 text-center  md:px-12">
				<Image
					src="/boilerplate.png"
					width={1000}
					height={1000}
					priority
					quality={100}
					alt="Boilerplate icon"
					className="w-14 h-14 mb-8"
				/>

				<h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
					Pronto para acelerar seu desenvolvimento com esse Boilerplate?
				</h2>
				<p className="mx-auto mt-6 max-w-xl text-lg text-foreground">
					Comece agora mesmo a construir aplicações web modernas e escaláveis.
					Esse Boilerplate oferece uma base sólida com as melhores práticas e
					tecnologias atuais.
				</p>
				<div className="mt-10">
					<Button size="lg" variant="default" className="font-semibold">
						Começar Agora
						<ArrowRight className="h-4 w-4" />
					</Button>
				</div>
			</div>
		</section>
	);
}
