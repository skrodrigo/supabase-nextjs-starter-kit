'use client'
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { ArrowRight, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export default function Header() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [menuState, setMenuState] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrolled = window.scrollY > 10;
			setIsScrolled(scrolled);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header>
			<nav
				data-state={menuState && 'active'}
				className="fixed z-50 w-full px-2"
			>
				<div className={cn('mx-auto mt-2 max-w-7xl px-6 transition-all duration-300 lg:px-12', isScrolled && 'bg-background/50 max-w-6xl rounded-lg border backdrop-blur-lg lg:px-5')}>
					<div className="relative flex items-center justify-between gap-6 py-2 flex-nowrap">
						<div className="flex justify-between lg:w-auto items-center min-w-0 flex-shrink-0">
							<div className="flex items-center gap-8">
								<Link href="/" className="font-bold text-xl">
									<Image
										src="/boilerplate.svg"
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
						</div>
						<div className="flex items-center gap-4 min-w-0 flex-shrink-0">
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
				</div>
			</nav>
		</header>
	);
}
