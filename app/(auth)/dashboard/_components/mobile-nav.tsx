"use client";

import { cn } from "@/lib/utils";
import { Home, Settings, Zap } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
	{
		label: "Home",
		icon: Home,
		href: "/dashboard",
	},

	{
		label: "Upgrade",
		icon: Zap,
		href: "/dashboard/upgrade",
	},
	{
		label: "Settings",
		icon: Settings,
		href: "/dashboard/settings",
	},
];

export function MobileNav() {
	const pathname = usePathname();

	return (
		<div className="fixed bottom-0 left-0 right-0 z-50 flex h-16 items-center justify-around border-t bg-background md:hidden">
			{items.map((item) => {
				const isActive = pathname === item.href;
				return (
					<Link
						key={item.href}
						href={item.href}
						className={cn(
							"flex flex-col items-center justify-center gap-1",
							isActive ? "text-primary" : "text-muted-foreground",
						)}
					>
						<item.icon className="h-5 w-5" />
						<span className="text-xs">{item.label}</span>
					</Link>
				);
			})}
		</div>
	);
}
