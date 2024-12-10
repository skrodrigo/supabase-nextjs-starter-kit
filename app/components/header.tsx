import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { ArrowRight, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
	return (
		<header className="w-full border-b border-gray-200">
			<div className="container mx-auto px-4 h-16 flex items-center justify-between">
				<div className="flex items-center gap-8">
					<Link href="/" className="font-bold text-xl">
						<Image
							src="/boilerplate.png"
							width={1000}
							height={1000}
							priority
							quality={100}
							alt="Boilerplate icon"
							className="w-10 h-10"
						/>
					</Link>
				</div>
				<nav className="hidden md:flex gap-6 mr-auto px-8">
					<Link
						href="/pricing"
						className="text-muted-foreground hover:text-foreground"
					>
						Preços
					</Link>
					<Link
						href="/faq"
						className="text-muted-foreground hover:text-foreground"
					>
						Dúvidas
					</Link>
				</nav>
				<div className="flex items-center gap-4">
					<div className="block md:hidden">
						<Drawer>
							<DrawerTrigger asChild>
								<Button variant="ghost" size="icon" className="h-12 w-12">
									<Menu className="h-12 w-12" />
								</Button>
							</DrawerTrigger>
							<DrawerContent>
								<nav className="flex flex-col gap-4 p-4">
									<Link
										href="/pricing"
										className="text-muted-foreground hover:text-foreground"
									>
										Pricing
									</Link>
									<Link
										href="/faq"
										className="text-muted-foreground hover:text-foreground"
									>
										Dúvidas
									</Link>
									<Link href="/register">
										<Button variant="link" className="w-full">
											Registrar
										</Button>
									</Link>
									<Link href="/login">
										<Button variant="default" className="w-full">
											Começar Agora
											<ArrowRight className="h-4 w-4" />
										</Button>
									</Link>
								</nav>
							</DrawerContent>
						</Drawer>
					</div>
					<div className="hidden md:flex items-center gap-4">
						<Link href="/register">
							<Button variant="link">Registrar</Button>
						</Link>
						<Link href="/login">
							<Button variant="default">
								Começar Agora
								<ArrowRight className="h-4 w-4" />
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</header>
	);
}
