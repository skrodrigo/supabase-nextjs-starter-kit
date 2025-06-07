"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircle, Loader2, Upload } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { getUserInfosAction, updateUserInfosAction } from "../actions";

const profileSchema = z.object({
	name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
	email: z.string().email("Email inválido"),
});

type ProfileFormValues = z.infer<typeof profileSchema>;

export function ProfileForm() {
	const [isLoading, setIsLoading] = useState(false);
	const form = useForm<ProfileFormValues>({
		resolver: zodResolver(profileSchema),
		defaultValues: {
			name: "",
			email: "",
		},
	});

	useEffect(() => {
		async function loadUserData() {
			try {
				const user = await getUserInfosAction();
				form.reset({
					name: user.name || "",
					email: user.email || "",
				});
			} catch (error) {
				console.error("Error loading user data:", error);
			}
		}
		loadUserData();
	}, [form]);

	async function onSubmit(data: ProfileFormValues) {
		try {
			setIsLoading(true);
			const formData = new FormData();
			formData.append("name", data.name);
			await updateUserInfosAction(formData);
		} catch (error) {
			console.error("Error updating profile:", error);
		} finally {
			setIsLoading(false);
		}
	}

	return (
		<Card>
			<CardContent className="p-8 space-y-6">
				<div className="flex items-center gap-4 mb-8">
					<Avatar className="h-16 w-16">
						<AvatarFallback>
							{form
								.getValues("name")
								.split(" ")
								.map((n) => n[0])
								.join("")
								.slice(0, 2)
								.toUpperCase()}
						</AvatarFallback>
					</Avatar>
					<Button variant="outline" size="sm" className="gap-2 font-bold">
						<Upload />
						Carregar foto
					</Button>
				</div>
				<Separator className="w-full" />

				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
					<div className="space-y-2">
						<Label htmlFor="name">Nome</Label>
						<Input id="name" {...form.register("name")} className="max-w-md" />
						{form.formState.errors.name && (
							<p className="text-sm text-destructive">
								{form.formState.errors.name.message}
							</p>
						)}
					</div>
					<Separator className="w-full" />

					<div className="space-y-2">
						<Label htmlFor="email">Email</Label>
						<Input
							id="email"
							type="email"
							{...form.register("email")}
							className="max-w-md text-muted-foreground"
							disabled
						/>
						<p className="text-sm text-muted-foreground flex items-center gap-2">
							<AlertCircle className="h-4 w-4" />
							Para alterar seu email, por favor entre em contato com o suporte.
						</p>
					</div>

					<Button type="submit" disabled={isLoading}>
						{isLoading ? (
							<Loader2 className="mr-2 h-4 w-4 animate-spin" />
						) : null}
						{isLoading ? "Salvando" : "Salvar Alterações"}
					</Button>
				</form>
			</CardContent>
		</Card>
	);
}
