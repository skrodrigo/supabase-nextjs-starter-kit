import { PricingForm } from "./_components/princing-form";

export const metadata = {
	title: "Boilerplate | Billing",
	description: "Manage your subscription and billing settings",
};

export default function BillingPage() {
	return (
		<div className="space-y-6">
			<div>
				<h2 className="text-2xl font-bold">Assinatura</h2>
				<span className="text-muted-foreground">Confira seu uso mensal</span>
			</div>
			<div className="space-y-6">
				<PricingForm />
			</div>
		</div>
	);
}
