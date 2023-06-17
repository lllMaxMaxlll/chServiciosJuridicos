"use client";

import { useState, useEffect } from "react";

import Link from "next/link";
import { MobileMenu, Logo, Switcher } from "@/components";

type LinksHeader = {
	title: string;
	href: string;
};

export default function Header() {
	const [top, setTop] = useState<boolean>(true);
	const links: LinksHeader[] = [
		{ title: "Inicio", href: "/" },
		{ title: "Servicios", href: "/services" },
		{ title: "Quienes somos", href: "/about" },
		{ title: "FAQ", href: "/faq" },
	];
	// detect whether user has scrolled the page down by 10px
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
			className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
				!top ? "bg-neutral-100 dark:bg-neutral-900 backdrop-blur-sm shadow-lg" : ""
			}`}>
			<div className="max-w-6xl mx-auto px-5 sm:px-6">
				<div className="flex items-center justify-between h-16 md:h-20">
					<div className="shrink-0 mr-4">
						<Logo />
					</div>
					<nav className="hidden md:flex md:grow">
						<ul className="flex grow justify-end flex-wrap items-center">
							{links.map((e, i) => (
								<li key={i}>
									<Link
										href={e.href}
										className="relative mx-5 font-medium text-neutral-100 before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-neutral-100 before:transition hover:before:scale-100">
										{e.title}
									</Link>
								</li>
							))}
							<li>
								<Link
									href="/contact"
									className="inline-block rounded border border-neutral-100 bg-neutral-100 ms-3 px-5 py-2 text-sm font-medium text-neutral-800 hover:bg-neutral-800 hover:text-neutral-100 focus:outline-none focus:ring active:text-neutral-50 transition duration-300">
									Contacto
								</Link>
							</li>
						</ul>
						<Switcher />
					</nav>

					<MobileMenu />
				</div>
			</div>
		</header>
	);
	// rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow dark:hover:bg-teal-500
}
