import { ThemeProvider } from "./components/theme-provider";
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
		<html lang="en" suppressHydrationWarning>
			<body>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<body className={`${dmSans.className} antialiased`}>{children}</body>
				</ThemeProvider>
			</body>
		</html>
	);
}
