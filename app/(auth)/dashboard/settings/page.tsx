import { Separator } from "@/components/ui/separator";
import { ProfileForm } from "./_components/profile-form";
import { ThemeForm } from "./_components/theme-form";

export const metadata = {
	title: "Boilerplate | Settings",
	description: "Manage your account settings and preferences",
};

export default function SettingsPage() {
	return (
		<div className="space-y-6">
			<div>
				<h2 className="text-2xl font-bold">Perfil</h2>
				<span className="text-muted-foreground">
					Atualize suas informações de perfil aqui.
				</span>
			</div>
			<div className="space-y-6">
				<ProfileForm />
				<Separator />
				<div>
					<h2 className="text-2xl font-bold mb-2">Aparência</h2>
					<span className="text-muted-foreground">
						Personalize a aparência do seu painel.
					</span>
				</div>
				<div className="">
					<ThemeForm />
				</div>
			</div>
		</div>
	);
}
