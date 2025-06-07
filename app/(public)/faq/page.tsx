import FAQsTwo from "@/app/components/faq";
import FooterSection from "@/app/components/footer";
import { TopBanner } from "@/app/components/top-banner";
import { SubHeader } from "../_components/sub-header";

export const metadata = {
	title: "Boilerplate | FAQ",
	description: "A boilerplate project with landing, auth, and dashboard",
};

export default function FAQPage() {
	return (
		<div>
			<SubHeader />
			<main className="max-w-7xl mx-auto">
				<FAQsTwo />
			</main>
			<FooterSection />
		</div>
	);
}
