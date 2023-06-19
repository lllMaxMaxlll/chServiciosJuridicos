"use client";

import { useState, useRef, useEffect } from "react";
import { Transition } from "@headlessui/react";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import { Switcher } from "@/components";

type LinksMobileMenu = {
	title: string;
	href: string;
};

export default function MobileMenu() {
	const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);

	const trigger = useRef<HTMLButtonElement>(null);
	const mobileNav = useRef<HTMLDivElement>(null);

	const links: LinksMobileMenu[] = [
		{ title: "Inicio", href: "hero" },
		{ title: "Quienes somos", href: "about" },
		{ title: "Servicios", href: "services" },
		{ title: "FAQ", href: "faq" },
		{ title: "Contacto", href: "/contact" },
	];

	// close the mobile menu on click outside
	useEffect(() => {
		const clickHandler = ({ target }: { target: EventTarget | null }): void => {
			if (!mobileNav.current || !trigger.current) return;
			if (!mobileNavOpen || mobileNav.current.contains(target as Node) || trigger.current.contains(target as Node)) return;
			setMobileNavOpen(false);
		};
		document.addEventListener("click", clickHandler);
		return () => document.removeEventListener("click", clickHandler);
	});

	// close the mobile menu if the esc key is pressed
	useEffect(() => {
		const keyHandler = ({ keyCode }: { keyCode: number }): void => {
			if (!mobileNavOpen || keyCode !== 27) return;
			setMobileNavOpen(false);
		};
		document.addEventListener("keydown", keyHandler);
		return () => document.removeEventListener("keydown", keyHandler);
	});

	return (
		<div className="flex md:hidden">
			<Switcher />
			<button
				ref={trigger}
				className={`hamburger ${mobileNavOpen && "active"}`}
				aria-controls="mobile-nav"
				aria-expanded={mobileNavOpen}
				onClick={() => setMobileNavOpen(!mobileNavOpen)}>
				<span className="sr-only">Menu</span>
				<svg className="w-6 h-6 fill-current text-neutral-900 dark:text-neutral-200" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<rect y="4" width="24" height="2" />
					<rect y="11" width="24" height="2" />
					<rect y="18" width="24" height="2" />
				</svg>
			</button>

			<div ref={mobileNav}>
				<Transition
					show={mobileNavOpen}
					as="nav"
					id="mobile-nav"
					className="absolute top-full h-screen pb-16 z-20 left-0 w-full overflow-hidden bg-neutral-100 dark:bg-neutral-900"
					enter="transition ease-out duration-200 transform"
					enterFrom="opacity-0 -translate-y-2"
					enterTo="opacity-100 translate-y-0"
					leave="transition ease-out duration-200"
					leaveFrom="opacity-100"
					leaveTo="opacity-0 translate-y-0">
					<ul className="px-5 py-2 flex justify-center items-center h-full flex-col">
						{links.map((e, i) => (
							<li key={i} className="py-3 text-2xl">
								<ScrollLink
									activeClass="active"
									to={e.href}
									spy={true}
									smooth={true}
									offset={-70} // Ajusta el desplazamiento vertical
									duration={700}
									onClick={() => setMobileNavOpen(false)}
									className="flex cursor-pointer font-medium w-full text-neutral-900 hover:text-neutral-600 dark:text-neutral-100 dark:hover:text-neutral-200 justify-center">
									{e.title}
								</ScrollLink>
							</li>
						))}
					</ul>
				</Transition>
			</div>
		</div>
	);
}
