import { FAQ } from "@/app/components/faq";
import { Footer } from "@/app/components/footer";
import Header from "@/app/components/header";
import { TopBanner } from "@/app/components/top-banner";
import { SubHeader } from "../_components/sub-header";

export const metadata = {
	title: "Boilerplate | FAQ",
	description: "A boilerplate project with landing, auth, and dashboard",
};

export default function FAQPage() {
	return (
		<div>
			<TopBanner />
			<Header />
			<SubHeader />
			<main className="max-w-7xl mx-auto">
				<FAQ />
			</main>
			<Footer />
		</div>
	);
}
