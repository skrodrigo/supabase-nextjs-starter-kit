import "./globals.css";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata = {
	title: "Boilerplate Project",
	description: "A boilerplate project with landing, auth, and dashboard",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`${dmSans.className} antialiased`}>{children}</body>
		</html>
	);
}
