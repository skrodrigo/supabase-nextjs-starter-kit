import { FAQ } from "@/app/components/faq";
import { Footer } from "@/app/components/footer";
import Header from "@/app/components/header";
import { Pricing } from "@/app/components/pricing";
import { Testimonials } from "@/app/components/testimonials";
import { SubHeader } from "../_components/sub-header";

export const metadata = {
	title: "Boilerplate | Pricing",
	description: "A boilerplate project with landing, auth, and dashboard",
};

export default function PricingPage() {
	return (
		<div>
			<Header />
			<SubHeader />
			<main className="max-w-7xl mx-auto">
				<Pricing />
				<Testimonials />
				<FAQ />
			</main>
			<Footer />
		</div>
	);
}
