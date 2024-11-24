import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
	{
		content:
			"Cardano Feed relies on NotifyLog for real-time event tracking across our global cryptocurrency news network, enhancing our responsiveness and user engagement.",
		author: "Otavio Lima",
		role: "CEO at Cardano Feed",
	},
	{
		content:
			"NotifyLog streamlines SaaS monitoring at Digivets, offering a compact solution for tracking deployments, user interactions, and system alerts. Its a game changer.",
		author: "Felipe Barcelos",
		role: "CTO at Digivets",
	},
	{
		content:
			"As a dynamic agency, NotifyLog is our go-to tool for centralized event management, allowing us to deliver timely updates and insights to our clients with ease.",
		author: "William Rulli",
		role: "CEO at Will Hack",
	},
];

export function Testimonials() {
	return (
		<section className="container mx-auto px-4 py-24">
			<div className="text-center mb-16">
				<Badge variant="secondary" className="mb-2">
					Testimonials
				</Badge>
				<h2 className="text-3xl font-bold mb-4">
					Our Delighted <span className="text-muted-foreground">Clients</span>
				</h2>
				<p className="text-muted-foreground">
					We are not done yet, check these out.
				</p>
			</div>

			<div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
				{testimonials.map((testimonial) => (
					<Card
						key={testimonial.author}
						className="border bg-muted/50 shadow-none"
					>
						<CardContent className="pt-6">
							<p className="mb-6 text-muted-foreground">
								{testimonial.content}
							</p>
							<div>
								<p className="font-semibold">{testimonial.author}</p>
								<p className="text-sm text-muted-foreground">
									{testimonial.role}
								</p>
							</div>
						</CardContent>
					</Card>
				))}
			</div>
		</section>
	);
}
