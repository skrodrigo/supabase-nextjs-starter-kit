"use client";

import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

export function Footer() {
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<footer className="w-full border-t border-border ">
			<div className="container mx-auto px-4 py-8">
				<div className="flex flex-col items-center justify-center gap-4">
					<Button
						variant="outline"
						size="icon"
						className="rounded-full"
						onClick={scrollToTop}
					>
						<ArrowUp className="h-4 w-4" />
					</Button>
					<p className="text-sm text-muted-foreground text-center">
						© {new Date().getFullYear()} Use Link. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}
