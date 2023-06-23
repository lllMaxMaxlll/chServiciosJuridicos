"use client";

import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MobileMenu, Logo, Switcher } from "@/components";

type LinksHeader = {
	title: string;
	href: string;
};

export default function Header() {
	const [top, setTop] = useState<boolean>(true);
	const pathname = usePathname();
	const links: LinksHeader[] = [
		{ title: "Inicio", href: "hero" },
		{ title: "Quienes somos", href: "about" },
		{ title: "Servicios", href: "services" },
		{ title: "FAQ", href: "faq" },
	];

	const scrollHandler = () => {
		window.pageYOffset > 10 ? setTop(false) : setTop(true);
	};

	useEffect(() => {
		scrollHandler();
		window.addEventListener("scroll", scrollHandler);
		return () => window.removeEventListener("scroll", scrollHandler);
	}, [top]);

	return (
		<header
			className={`fixed w-screen z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
				!top ? "bg-neutral-100 dark:bg-neutral-900 backdrop-blur-sm shadow-lg" : ""
			}`}>
			<div className="max-w-6xl mx-auto px-5 sm:px-6">
				<div className="flex items-center justify-between h-16 md:h-20">
					<div className="shrink-0 mr-4">
						<Logo />
					</div>
					<nav id="nav" className="hidden md:flex md:grow">
						{pathname === "/" && (
							<ul className="flex grow justify-end flex-wrap items-center">
								{links.map((e, i) => (
									<li key={i}>
										<ScrollLink
											activeClass="active"
											to={e.href}
											spy={true}
											smooth={true}
											offset={-70} // Ajusta el desplazamiento vertical
											duration={700}
											className="relative cursor-pointer mx-5 font-medium  before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-neutral-900 dark:before:bg-neutral-100 before:transition hover:before:scale-100">
											{e.title}
										</ScrollLink>
									</li>
								))}
								<li>
									<Link
										href="/contact"
										className="inline-block rounded border border-neutral-900 dark:border-neutral-100 bg-neutral-900 dark:bg-neutral-100 ms-3 px-5 py-2 text-sm font-medium text-neutral-200 dark:text-neutral-900 hover:bg-neutral-100 hover:text-neutral-900 dark:hover:bg-neutral-900 dark:hover:text-neutral-100 focus:outline-none focus:ring active:text-neutral-50 transition duration-300">
										Contacto
									</Link>
								</li>
							</ul>
						)}
						{pathname !== "/" && (
							<ul className="flex grow justify-end flex-wrap items-center">
								<Link
									href="/"
									className="relative cursor-pointer mx-5 font-medium  before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-neutral-900 dark:before:bg-neutral-100 before:transition hover:before:scale-100">
									Volver al inicio
								</Link>
							</ul>
						)}
						<Switcher />
					</nav>

					<MobileMenu />
				</div>
			</div>
		</header>
	);
}
