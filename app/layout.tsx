import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "CH Servicios Juridicos",
	description: "CH Servicios Juridicos",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="es" suppressHydrationWarning>
			<body className={`${inter.className} bg-white dark:bg-neutral-900 w-screen`}>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
