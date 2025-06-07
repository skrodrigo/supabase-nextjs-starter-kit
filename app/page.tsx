import { Separator } from "@/components/ui/separator";
import { CTA } from "./components/cta";
import { Features } from "./components/features";
import Header from "./components/header";
import { Hero } from "./components/hero";
import { HeroVideoDialogDemo } from "./components/hero-video-dialog";
import { Pricing } from "./components/pricing";
import { Testimonials } from "./components/testimonials";
import LogoCloud from "./components/logo-cloud";
import BentoGrid from "@/app/components/bento-grid";
import IntegrationsSection from "@/app/components/integrations";
import FooterSection from "@/app/components/footer";
import FAQsTwo from "@/app/components/faq";

export default function Home() {
	return (
		<div>
			<div className="pb-10">
				<Header />
			</div>
			<main className="w-full mx-auto">
				<Hero />
				<HeroVideoDialogDemo />
				<LogoCloud />
				<Separator className="w-full" />
				<Features />
				<Separator className="w-full" />
				<BentoGrid />
				<Separator className="w-full" />
				<IntegrationsSection />
				<Separator className="w-full" />
				<Pricing />
				<Separator className="w-full" />
				<Testimonials />
				<Separator className="w-full" />
				<FAQsTwo />
				<Separator className="w-full" />
				<CTA />
				<Separator className="w-full" />
			</main>
			<FooterSection />
		</div>
	);
}
