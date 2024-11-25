"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

import { ArrowLeft, HelpCircle } from "lucide-react";

import Image from "next/image";
import Link from "next/link";

import { useRouter } from "next/navigation";

import { zodResolver } from "@hookform/resolvers/zod";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z
	.object({
		name: z.string().min(2, "Nome deve ter no mínimo 2 caracteres"),
		email: z.string().email("Email inválido"),
		password: z.string().min(6, "Senha deve ter no mínimo 6 caracteres"),
		confirmPassword: z.string().min(6, "Senha deve ter no mínimo 6 caracteres"),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "As senhas não coincidem",
		path: ["confirmPassword"],
	});

export default function RegisterForm() {
	const router = useRouter();
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			email: "",
			password: "",
			confirmPassword: "",
		},
	});

	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		try {
			const supabase = createClientComponentClient();
			const { email, password, name } = values;

			const {
				error,
				data: { user },
			} = await supabase.auth.signUp({
				email,
				password,
				options: {
					data: {
						name,
					},
				},
			});
			if (user) {
				form.reset();
				router.push("/login");
			}
		} catch (error) {
			console.error("CreateAccount", error);
		}
	};

	return (
		<div className="flex flex-col lg:flex-row min-h-screen">
			{/* Right side */}
			<div className="hidden lg:flex lg:flex-1 bg-primary relative rounded-e-3xl">
				<div className="absolute inset-0 p-6 lg:p-12 flex items-center">
					<p className="text-primary-foreground text-2xl lg:text-3xl font-light leading-relaxed">
						Transforme qualquer link compartilhado em uma oportunidade
						estratégica para coletar leads valiosos e expandir sua audiência com
						Use Link.
					</p>
				</div>
			</div>

			{/* Left side */}
			<div className="flex-1 flex items-center justify-center bg-background p-4 sm:p-6 lg:p-8">
				<div className="w-full max-w-[440px]">
					{/* Header */}
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

					{/* Logo */}
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

					<Card className="border-0 shadow-none items-center justify-center flex flex-col">
						<CardHeader className="p-0">
							<CardTitle className="text-sm sm:text-base font-normal text-muted-foreground">
								Crie sua conta para continuar
							</CardTitle>
						</CardHeader>
						<CardContent className="p-0 mt-6 lg:mt-8">
							<form
								onSubmit={form.handleSubmit(onSubmit)}
								className="space-y-4"
							>
								<div className="space-y-2">
									<Input
										id="name"
										type="text"
										placeholder="Seu nome"
										className="h-10 sm:h-12"
										{...form.register("name")}
									/>
									{form.formState.errors.name && (
										<p className="text-sm text-red-500">
											{form.formState.errors.name.message}
										</p>
									)}
								</div>

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

								<div className="space-y-2">
									<Input
										id="confirmPassword"
										type="password"
										placeholder="Confirme sua senha"
										className="h-10 sm:h-12"
										{...form.register("confirmPassword")}
									/>
									{form.formState.errors.confirmPassword && (
										<p className="text-sm text-red-500">
											{form.formState.errors.confirmPassword.message}
										</p>
									)}
								</div>

								<Button
									type="submit"
									className="w-full h-10 sm:h-12"
									disabled={form.formState.isSubmitting}
								>
									Criar conta
								</Button>

								<div className="relative my-6 lg:my-8">
									<div className="absolute inset-0 flex items-center">
										<Separator className="w-full" />
									</div>
								</div>

								<p className="text-xs text-center text-muted-foreground pt-4">
									Já tem uma conta?{" "}
									<Link href="/login" className="text-primary hover:underline">
										Faça login
									</Link>
								</p>

								<p className="text-xs text-center text-muted-foreground pt-4 lg:mt-8">
									Ao se inscrever, você concorda com os{" "}
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
				</div>
			</div>
		</div>
	);
}
