"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ArrowUpRight, Bell, CreditCard, LogOut, Settings } from "lucide-react";
import { useState } from "react";

export function Header() {
	const [user] = useState({ name: "John Doe", email: "john@example.com" });

	return (
		<header className="md:border-b">
			<div className="flex h-16 items-center px-4">
				<div className="ml-auto flex items-center space-x-4">
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button
								variant="ghost"
								className="relative h-10 w-10 rounded-full"
							>
								<Avatar className="h-10 w-10">
									<AvatarImage src="/avatars/01.png" alt={user.name} />
									<AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
								</Avatar>
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent className="w-56" align="end" forceMount>
							<DropdownMenuLabel className="font-normal">
								<div className="flex flex-col space-y-1">
									<p className="text-sm font-medium leading-none">
										{user.name}
									</p>
									<p className="text-xs leading-none text-muted-foreground">
										{user.email}
									</p>
								</div>
							</DropdownMenuLabel>
							<DropdownMenuSeparator />
							<DropdownMenuItem>
								<Settings className="mr-2 h-4 w-4" />
								Settings
							</DropdownMenuItem>
							<DropdownMenuItem>
								<CreditCard className="mr-2 h-4 w-4 text-foreground" />
								Billing
							</DropdownMenuItem>
							<DropdownMenuSeparator />
							<DropdownMenuItem>
								Support
								<ArrowUpRight className="ml-auto h-4 w-4" />
							</DropdownMenuItem>
							<DropdownMenuItem>
								Afilliate
								<ArrowUpRight className="ml-auto h-4 w-4" />
							</DropdownMenuItem>
							<DropdownMenuSeparator />
							<DropdownMenuItem>
								<LogOut className="mr-2 h-4 w-4" />
								Log out
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			</div>
		</header>
	);
}
