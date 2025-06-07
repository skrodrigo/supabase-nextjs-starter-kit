import { Pricing } from "@/app/components/pricing";
import { Testimonials } from "@/app/components/testimonials";
import { SubHeader } from "../_components/sub-header";
import FooterSection from "@/app/components/footer";
import FAQsTwo from "@/app/components/faq";
import { TopBanner } from "@/app/components/top-banner";

export const metadata = {
	title: "Boilerplate | Pricing",
	description: "A boilerplate project with landing, auth, and dashboard",
};

export default function PricingPage() {
	return (
		<div>
			<TopBanner />
			<SubHeader />
			<main className="max-w-7xl mx-auto">
				<Pricing />
				<Testimonials />
				<FAQsTwo />
			</main>
			<FooterSection />
		</div>
	);
}
