import { CTA } from "./components/cta";
import { FAQ } from "./components/faq";
import { Features } from "./components/features";
import { Footer } from "./components/footer";
import Header from "./components/header";
import { Hero } from "./components/hero";
import { HeroVideoDialogDemo } from "./components/heroVideoDialog";
import { Pricing } from "./components/pricing";
import { Testimonials } from "./components/testimonials";
import { TopBanner } from "./components/topBanner";

export default function Home() {
	return (
		<div>
			<TopBanner />
			<Header />
			<main className="w-full mx-auto">
				<Hero />
				<hr className="border-t border-muted w-full h-5" />
				<HeroVideoDialogDemo />
				<Features />
				<hr className="border-t border-muted w-full h-5" />
				<Pricing />
				<hr className="border-t border-muted w-full h-5" />
				<Testimonials />
				<hr className="border-t border-muted w-full h-5" />
				<FAQ />
				<hr className="border-t border-muted w-full h-5" />
				<CTA />
			</main>
			<Footer />
		</div>
	);
}
