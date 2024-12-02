'use client'

import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const routes = [
	{ label: "Preços", href: "/pricing" },
	{ label: "Dúvidas", href: "/faq" },
];

export function SubHeader() {
	const pathname = usePathname();

	const currentRoute = routes.find((route) => route.href === pathname);

	if (!currentRoute) return null;

	return (
		<div>
			<div className="container mx-auto px-4">
				<div className="flex h-14 items-center justify-between">
					<Button variant="link" asChild>
						<Link href="/" className="flex items-center gap-2">
							<ArrowLeft className="h-4 w-4" />
							back
						</Link>
					</Button>
					<Breadcrumb>
						<BreadcrumbList>
							<BreadcrumbItem>
								<BreadcrumbLink asChild>
									<Link href="/">Home</Link>
								</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator />
							<BreadcrumbItem>
								<BreadcrumbLink asChild>
									<Link href={currentRoute.href}>{currentRoute.label}</Link>
								</BreadcrumbLink>
							</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>
				</div>
			</div>
		</div>
	);
}
