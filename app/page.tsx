import { Separator } from "@/components/ui/separator";

import { CTA } from "./components/cta";
import { FAQ } from "./components/faq";
import { Features } from "./components/features";
import { Footer } from "./components/footer";
import Header from "./components/header";
import { Hero } from "./components/hero";
import { HeroVideoDialogDemo } from "./components/hero-video-dialog";
import { Pricing } from "./components/pricing";
import { Testimonials } from "./components/testimonials";
import { TopBanner } from "./components/top-banner";

export default function Home() {
	return (
		<div>
			<TopBanner />
			<Header />
			<main className="w-full mx-auto">
				<Hero />
				<Separator className="w-full" />
				<HeroVideoDialogDemo />
				<Separator className="w-full" />
				<Features />
				<Separator className="w-full" />
				<Pricing />
				<Separator className="w-full" />
				<Testimonials />
				<Separator className="w-full" />
				<FAQ />
				<Separator className="w-full" />
				<CTA />
			</main>
			<Footer />
		</div>
	);
}
