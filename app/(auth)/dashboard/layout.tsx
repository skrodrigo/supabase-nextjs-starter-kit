"use client";

import { Button } from "@/components/ui/button";
import {
	Drawer,
	DrawerContent,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer";
import { Home, Menu, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Header } from "./_components/header";

const sidebarItems = [{ icon: Home, label: "Home", href: "/dashboard" }];

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	const pathname = usePathname();

	return (
		<div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
			<div className="w-full flex-none md:w-64">
				<div className="flex items-center justify-between p-4 md:hidden">
					<Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
						<DrawerTrigger asChild>
							<Button variant="ghost">
								<Menu className="h-6 w-6" />
								<span className="sr-only">Toggle Sidebar</span>
							</Button>
						</DrawerTrigger>
						<DrawerContent>
							<DrawerHeader className="flex justify-start">
								<DrawerTitle className="flex items-center justify-start gap-2">
									<Image
										src="/boilerplate.svg"
										width={1000}
										height={1000}
										priority
										quality={100}
										alt="Boilerplate icon"
										className="w-10 h-10"
									/>
									<span className="text-xl font-bold">BoilerPlate</span>
								</DrawerTitle>
							</DrawerHeader>
							<nav className="flex flex-col gap-2 p-4">
								{sidebarItems.map((item) => (
									<Link key={item.href} href={item.href} passHref>
										<Button
											variant={pathname === item.href ? "secondary" : "ghost"}
											className="w-full justify-start"
											onClick={() => setIsDrawerOpen(false)}
										>
											<item.icon className="mr-2 h-4 w-4" />
											{item.label}
										</Button>
									</Link>
								))}
							</nav>
							<div className="p-4 ">
								<div className="bg-muted p-4 rounded-lg">
									<h3 className="mb-2 font-semibold">Upgrade to Pro</h3>
									<p className="mb-4 text-sm text-muted-foreground">
										Unlock all features and get priority support.
									</p>
									<Button className="w-full">
										<Zap className="mr-2 h-4 w-4" />
										Upgrade Now
									</Button>
								</div>
							</div>
						</DrawerContent>
					</Drawer>
					<Header />
				</div>
				<div className="flex h-full flex-col justify-between	">
					<div>
						<div className="hidden items-center justify-start gap-2 p-4 md:flex">
							<Image
								src="/boilerplate.svg"
								width={1000}
								height={1000}
								priority
								quality={100}
								alt="Boilerplate icon"
								className="w-10 h-10"
							/>
							<span className="text-xl font-bold">BoilerPlate</span>
						</div>
						<nav className="hidden flex-col gap-2 p-4 md:flex">
							{sidebarItems.map((item) => (
								<Link key={item.href} href={item.href} passHref>
									<Button
										variant={pathname === item.href ? "secondary" : "ghost"}
										className="w-full justify-start"
									>
										<item.icon className="mr-2 h-4 w-4" />
										{item.label}
									</Button>
								</Link>
							))}
						</nav>
					</div>
					<div className="hidden p-4 md:block">
						<div className="rounded-lg bg-muted p-4">
							<h3 className="mb-2 font-semibold">Upgrade to Pro</h3>
							<p className="mb-4 text-sm text-muted-foreground">
								Unlock all features and get priority support.
							</p>
							<Button className="w-full">
								{" "}
								<Zap className="mr-2 h-4 w-4" />
								Upgrade Now
							</Button>
						</div>
					</div>
				</div>
			</div>
			<div className="flex-grow md:overflow-y-auto border border-b">
				<div className="hidden md:block">
					<Header />
				</div>
				<main className="p-6">{children}</main>
			</div>
		</div>
	);
}
