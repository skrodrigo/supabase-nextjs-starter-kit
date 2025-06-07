import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export function CTA() {
	return (
		<section className="container mx-auto px-4 py-10">
			<div className="flex justify-center mb-8">
				<Badge variant="secondary" className="mb-2 border border-zinc-200">
					Lest's Get Started
				</Badge>
			</div>
			<div className="flex flex-col items-center justify-center rounded-lg px-6 space-y-4 text-center  md:px-12">
				<h2 className="text-balance text-3xl font-semibold md:text-4xl max-w-4xl">Pronto para acelerar seu desenvolvimento com esse Boilerplate?</h2>
				<p className="text-muted-foreground max-w-3xl">Comece agora mesmo a construir aplicações web modernas e escaláveis.</p>
				<div className="pt-12">
					<Button size="lg" variant="default" className="font-semibold">
						Começar Agora
						<ArrowRight className="h-4 w-4" />
					</Button>
				</div>
			</div>
		</section>
	);
}
