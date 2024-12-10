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
import {
	ArrowUpRight,
	Home,
	LogOut,
	Search,
	Settings,
	Zap,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getUserInfosAction } from "../settings/actions";

const sidebarItems = [{ icon: Home, label: "Home", href: "/dashboard" }];

export function Header() {
	const router = useRouter();
	const [open, setOpen] = useState(false);
	const [user, setUser] = useState<{
		name: string;
		email: string;
	}>({
		name: "",
		email: "",
	});

	useEffect(() => {
		async function loadUserData() {
			try {
				const userData = await getUserInfosAction();
				setUser({
					name: userData.name || "",
					email: userData.email || "",
				});
			} catch (error) {
				console.error("Error loading user data:", error);
			}
		}
		loadUserData();
	}, []);

	const handleLogout = async () => {
		const response = await fetch("/api/auth/logout", {
			method: "POST",
		});

		if (!response.ok) {
			console.error("Logout failed", await response.json());
			return;
		}

		router.refresh();
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
					className="w-[260px] justify-start text-sm text-muted-foreground bg-muted/80"
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
								<AvatarFallback>
									{user.name
										.split(" ")
										.map((n) => n[0])
										.join("")
										.slice(0, 2)
										.toUpperCase()}
								</AvatarFallback>
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
