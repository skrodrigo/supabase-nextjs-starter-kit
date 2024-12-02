"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeForm() {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	return (
		<Card className="bg-muted/80 ">
			<CardContent className="p-4 sm:p-6 md:p-8">
				<div className="space-y-4 md:space-y-6">
					<div className="space-y-2">
						<Label className="text-base md:text-lg">Tema</Label>
						<p className="text-sm md:text-base text-muted-foreground">
							Selecione o tema para o dashboard.
						</p>
					</div>

					<RadioGroup
						defaultValue={theme}
						onValueChange={(value) => setTheme(value)}
						className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 pt-2"
					>
						<div className="w-full max-w-md mx-auto">
							<Label className="[&:has([data-state=checked])>div]:border-primary block w-full">
								<RadioGroupItem value="light" className="sr-only" />
								<div className="items-center rounded-md border-2 border-muted p-1 hover:border-accent transition-colors">
									<div className="space-y-2 rounded-sm bg-[#ecedef] p-2">
										<div className="space-y-2 rounded-md bg-white p-2 shadow-sm">
											<div className="h-2 w-[80%] rounded-lg bg-[#ecedef]" />
											<div className="h-2 w-full rounded-lg bg-[#ecedef]" />
										</div>
										<div className="flex items-center space-x-2 rounded-md bg-white p-2 shadow-sm">
											<Sun className="h-4 w-4 text-muted-foreground flex-shrink-0" />
											<div className="h-2 w-full rounded-lg bg-[#ecedef]" />
										</div>
									</div>
								</div>
								<span className="block w-full p-2 text-center font-normal text-sm md:text-base">
									Claro
								</span>
							</Label>
						</div>

						<div className="w-full max-w-md mx-auto">
							<Label className="[&:has([data-state=checked])>div]:border-primary block w-full">
								<RadioGroupItem value="dark" className="sr-only" />
								<div className="items-center rounded-md border-2 border-muted bg-popover p-1 hover:bg-accent hover:text-accent-foreground transition-colors">
									<div className="space-y-2 rounded-sm bg-zinc-950 p-2">
										<div className="space-y-2 rounded-md bg-zinc-800 p-2 shadow-sm">
											<div className="h-2 w-[80%] rounded-lg bg-zinc-400" />
											<div className="h-2 w-full rounded-lg bg-zinc-400" />
										</div>
										<div className="flex items-center space-x-2 rounded-md bg-zinc-800 p-2 shadow-sm">
											<Moon className="h-4 w-4 text-zinc-400 flex-shrink-0" />
											<div className="h-2 w-full rounded-lg bg-zinc-400" />
										</div>
									</div>
								</div>
								<span className="block w-full p-2 text-center font-normal text-sm md:text-base">
									Escuro
								</span>
							</Label>
						</div>
					</RadioGroup>
				</div>
			</CardContent>
		</Card>
	);
}
