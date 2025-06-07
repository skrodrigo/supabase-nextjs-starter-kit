"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

import { zodResolver } from "@hookform/resolvers/zod";

import { ArrowLeft, HelpCircle, Loader2 } from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useState } from "react";
import { useForm } from "react-hook-form";

import { z } from "zod";

const formSchema = z.object({
	email: z.string().email("Email inválido"),
	password: z.string().min(6, "Senha deve ter no mínimo 6 caracteres"),
});

export default function LoginForm() {
	const router = useRouter();
	const [errorMessage, setErrorMessage] = useState<string | null>(null);
	const [isLoading, setIsLoading] = useState(false);

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		try {
			setIsLoading(true);
			const { email, password } = values;
			setErrorMessage(null);

			const response = await fetch("/api/auth/login", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ email, password }),
			});

			const data = await response.json();

			if (!response.ok) {
				if (data.error === "User not found") {
					setErrorMessage("Usuário não cadastrado. Por favor, registre-se.");
					return;
				}

				if (data.error) {
					if (data.error.toLowerCase().includes("email")) {
						form.setError("email", { type: "manual", message: data.error });
					} else if (data.error.toLowerCase().includes("password")) {
						form.setError("password", { type: "manual", message: data.error });
					} else {
						setErrorMessage(data.error);
					}
					return;
				}
				throw new Error(data.message || "Login failed");
			}

			form.reset();
			router.push("/dashboard");
		} catch (error) {
			console.error("Login error:", error);
			setErrorMessage(error instanceof Error ? error.message : "Login failed");
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className="flex flex-col lg:flex-row min-h-screen">
			<div className="hidden lg:flex lg:flex-1 bg-primary relative rounded-e-3xl">
				<div className="absolute inset-0 p-6 lg:p-12 flex items-center">
					<p className="text-primary-foreground text-2xl lg:text-3xl font-light leading-relaxed">
						Acelere seu desenvolvimento com nosso Boilerplate Next.js. Estrutura
						sólida, componentes reutilizáveis e integração perfeita para
						projetos eficientes e escaláveis.
					</p>
				</div>
			</div>

			<div className="flex-1 flex items-center justify-center bg-background p-4 sm:p-6 lg:p-8">
				<div className="w-full max-w-[440px]">
					<div className="flex justify-between items-center mb-8 lg:mb-12">
						<Button
							variant="ghost"
							onClick={() => router.push("/")}
							className="h-10 w-10 rounded-full"
						>
							<ArrowLeft className="h-4 w-4 rounded-full" />
						</Button>
						<Button
							variant="ghost"
							className="text-sm sm:text-base rounded-full"
						>
							<HelpCircle className="h-4 w-4 rounded-full" />
							<span>Suporte</span>
						</Button>
					</div>

					<div className="flex items-center justify-center gap-2 mb-4 lg:mb-6">
						<Image
							src="/boilerplate.png"
							width={1000}
							height={1000}
							priority
							quality={100}
							alt="Boilerplate icon"
							className="w-14 h-14"
						/>
					</div>

					<Card className="border-0 items-center justify-center flex flex-col">
						<CardHeader className="p-0">
							<CardTitle className="text-sm sm:text-base font-normal text-muted-foreground">
								Entre para começar a usar o Boilerplate
							</CardTitle>
						</CardHeader>
						<CardContent className="p-0 mt-6 lg:mt-8 w-full">
							<form
								onSubmit={form.handleSubmit(onSubmit)}
								className="space-y-4"
							>
								<div className="space-y-2">
									<Input
										id="email"
										type="email"
										placeholder="Seu e-mail"
										className="h-10 sm:h-12"
										{...form.register("email")}
									/>
									{form.formState.errors.email && (
										<p className="text-sm text-red-500">
											{form.formState.errors.email.message}
										</p>
									)}
								</div>

								<div className="space-y-2">
									<Input
										id="password"
										type="password"
										placeholder="Sua senha"
										className="h-10 sm:h-12"
										{...form.register("password")}
									/>
									{form.formState.errors.password && (
										<p className="text-sm text-red-500">
											{form.formState.errors.password.message}
										</p>
									)}
								</div>

								<Button
									type="submit"
									className="w-full h-10 sm:h-12"
									disabled={isLoading}
								>
									{isLoading ? (
										<Loader2 className="mr-2 h-4 w-4 animate-spin" />
									) : (
										"Entrar"
									)}
								</Button>
								{errorMessage && (
									<p className="text-sm text-red-500 mb-4 text-center">
										{errorMessage}
									</p>
								)}
								<div className="relative my-6 lg:my-8">
									<div className="absolute inset-0 flex items-center">
										<Separator className="w-full" />
									</div>
								</div>
								<p className="text-xs text-center text-muted-foreground pt-4 lg:mt-8">
									Ao entrar, você concorda com nossos{" "}
									<Link href="#" className="text-primary hover:underline">
										Termos de Uso
									</Link>{" "}
									e{" "}
									<Link href="#" className="text-primary hover:underline">
										Política de Privacidade
									</Link>
								</p>
							</form>
						</CardContent>
					</Card>

					<p className="text-xs text-center text-muted-foreground mt-6 lg:mt-8">
						2024 Boilerplate Next.js. Todos os direitos reservados.
					</p>
				</div>
			</div>
		</div>
	);
}
