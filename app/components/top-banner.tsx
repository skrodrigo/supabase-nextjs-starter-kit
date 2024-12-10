import { Button } from "@/components/ui/button";
import Link from "next/link";

export function TopBanner() {
	return (
		<div className="relative bg-primary px-4 py-3">
			<div className="container mx-auto px-4">
				<div className="flex items-center justify-between gap-x-8">
					<div className="flex flex-1 items-start justify-start">
						<p className="text-sm text-primary-foreground">
							<span className="hidden md:inline">
								🔥 Aproveite 50% de desconto no plano PRO por tempo limitado.
							</span>
							<span className="inline md:hidden">
								🔥 50% de desconto no plano PRO.
							</span>
						</p>
					</div>
					<div className="flex flex-1 justify-end items-center gap-x-4">
						<Button
							asChild
							variant="secondary"
							size="sm"
							className="flex items-center" // Removed hidden md:flex to show on all screens
						>
							<Link href="/pricing" className="flex items-center gap-x-1">
								<span className="hidden md:inline">Ver planos</span>
								<span className="inline md:hidden">Ver</span>
							</Link>
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
