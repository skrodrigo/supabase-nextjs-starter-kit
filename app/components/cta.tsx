import { Button } from "@/components/ui/button";
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
					Pronto para transformar seus links em máquinas de leads?
				</h2>
				<p className="mx-auto mt-6 max-w-xl text-lg text-foreground">
					Comece agora mesmo a expandir sua base de leads com o Use Link.
					Cadastre-se gratuitamente e descubra o poder da geração inteligente de
					leads.
				</p>
				<div className="mt-10">
					<Button size="lg" variant="default" className="font-semibold">
						Começar gratuitamente
					</Button>
				</div>
			</div>
		</section>
	);
}
