"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
	Command,
	CommandDialog,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "@/components/ui/command";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { supabase } from "@/lib/supabaseClient";
import {
	ArrowUpRight,
	Home,
	LogOut,
	Search,
	Settings,
	Zap,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const sidebarItems = [{ icon: Home, label: "Home", href: "/dashboard" }];

export function Header() {
	const [user] = useState({
		name: "Rodrigo Carvalho",
		email: "rodrigoa0987@gmail.com",
	});

	const [open, setOpen] = useState(false);

	const handleLogout = async () => {
		const response = await fetch("/api/auth/logout", {
			method: "DELETE",
		});

		if (!response.ok) {
			console.error("Logout failed", await response.json());
			return;
		}

		console.log("Logout successful");
	};

	useEffect(() => {
		const down = (e: KeyboardEvent) => {
			if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
				e.preventDefault();
				setOpen((open) => !open);
			}
		};
		document.addEventListener("keydown", down);
		return () => document.removeEventListener("keydown", down);
	}, []);

	return (
		<header className="hidden md:block md:border-b">
			<div className="flex h-16 items-center px-4 justify-end gap-4">
				<Button
					variant="outline"
					className="w-[260px] justify-start text-sm text-muted-foreground"
					onClick={() => setOpen(true)}
				>
					<Search className="mr-2 h-4 w-4" />
					Search...
					<kbd className="pointer-events-none ml-auto inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
						<span className="text-xs">⌘</span>K
					</kbd>
				</Button>

				<CommandDialog open={open} onOpenChange={setOpen}>
					<Command>
						<CommandInput placeholder="Type a command or search..." />
						<CommandList>
							<CommandEmpty>No results found.</CommandEmpty>
							<CommandGroup heading="Suggestions">
								{sidebarItems.map((item) => (
									<CommandItem
										key={item.href}
										onSelect={() => {
											window.location.href = item.href;
										}}
									>
										<item.icon className="mr-2 h-4 w-4" />
										{item.label}
									</CommandItem>
								))}
							</CommandGroup>
						</CommandList>
					</Command>
				</CommandDialog>

				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="ghost" className="relative h-10 w-10 rounded-full">
							<Avatar className="h-10 w-10">
								<AvatarImage src="/avatar.png" alt={user.name} />
								<AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
							</Avatar>
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent className="w-56" align="end" forceMount>
						<DropdownMenuLabel className="font-normal">
							<div className="flex flex-col space-y-1">
								<p className="text-sm font-medium leading-none">{user.name}</p>
								<p className="text-xs leading-none text-muted-foreground">
									{user.email}
								</p>
							</div>
						</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DropdownMenuItem>
							<Link
								href="/dashboard/settings"
								className="cursor-pointer flex items-center"
							>
								<Settings className="mr-2 h-4 w-4" />
								Settings
							</Link>
						</DropdownMenuItem>
						<DropdownMenuItem>
							<Link
								href="/dashboard/upgrade"
								className="cursor-pointer flex items-center"
							>
								<Zap className="mr-2 h-4 w-4 text-foreground" />
								Upgrade
							</Link>
						</DropdownMenuItem>
						<DropdownMenuSeparator />
						<DropdownMenuItem>
							Support
							<ArrowUpRight className="ml-auto h-4 w-4" />
						</DropdownMenuItem>
						<DropdownMenuItem>
							Afilliate (50%)
							<ArrowUpRight className="ml-auto h-4 w-4" />
						</DropdownMenuItem>
						<DropdownMenuSeparator />
						<DropdownMenuItem onClick={handleLogout}>
							<LogOut className="mr-2 h-4 w-4" />
							Log out
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</header>
	);
}
