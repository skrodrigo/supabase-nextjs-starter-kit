import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { deleteAccountAction } from "../actions";

export const DangerZone = () => {
	return (
		<div className="border border-destructive/50 rounded-lg p-6">
			<div className="space-y-4">
				<div className="flex flex-col md:flex-row md:items-center md:justify-between">
					<div className="space-y-2 mb-4 md:mb-0">
						<Label className="text-base md:text-lg">Conta</Label>
						<p className="text-sm md:text-base text-muted-foreground">
							Deletação Permanente da conta.
						</p>
					</div>
					<Dialog>
						<DialogTrigger asChild>
							<Button variant="destructive">Excluir conta</Button>
						</DialogTrigger>
						<DialogContent>
							<DialogHeader>
								<DialogTitle>Tem certeza?</DialogTitle>
								<DialogDescription>
									Esta ação não pode ser desfeita. (ainda está em teste,
									provavelmente, apague seus cookies por sua conta própria).
								</DialogDescription>
							</DialogHeader>
							<form action={deleteAccountAction} className="space-y-4">
								<Button type="submit" variant="destructive" className="w-full">
									Sim, excluir minha conta!
								</Button>
							</form>
						</DialogContent>
					</Dialog>
				</div>
			</div>
		</div>
	);
};
