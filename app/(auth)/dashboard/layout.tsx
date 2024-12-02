"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Box, Home, Zap } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Header } from "./_components/header";
import { MobileNav } from "./_components/mobile-nav";

const sidebarItems = [
	{ icon: Home, label: "Dashboard", href: "/dashboard" },

	{ icon: Box, label: "Projects", href: "/dashboard/projects" },
];

interface DashboardLayoutProps {
	children: React.ReactNode;
}

const Sidebar = () => {
	const pathname = usePathname();

	return (
		<div className="hidden md:block h-screen bg-muted/30 w-52">
			<div className="flex h-full flex-col justify-between border-r">
				<div className="flex-grow">
					<div className="flex items-center justify-start gap-2 p-6">
						<h1 className="text-xl">
							<span className="font-bold">Boiler</span>plate
						</h1>
					</div>

					<nav className="flex flex-col gap-2 p-4">
						{sidebarItems.map((item) => (
							<Link key={item.href} href={item.href} passHref>
								<Button
									variant={pathname === item.href ? "secondary" : "ghost"}
									className="w-full justify-start border "
								>
									<item.icon className="mr-2 h-4 w-4" />
									{item.label}
								</Button>
							</Link>
						))}
					</nav>
				</div>
				<Separator className="w-full" />
				<div className="p-4">
					<div className="rounded-lg bg-gradient-to-tr from-muted/5 to-muted p-4 border">
						<h3 className="mb-2 font-semibold">Upgrade to Pro</h3>
						<p className="mb-4 text-sm text-muted-foreground">
							Unlock all features and get priority support.
						</p>
						<Button className="w-full border">
							<Zap className="mr-2 h-4 w-4" />
							Upgrade Now
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
	return (
		<div className="flex h-screen">
			<aside className="flex-none">
				<Sidebar />
			</aside>
			<div className="flex flex-col flex-1">
				<header className="flex-none">
					<Header />
				</header>
				<main className="flex-1 p-6 overflow-auto">{children}</main>
			</div>
			<MobileNav />
		</div>
	);
}
