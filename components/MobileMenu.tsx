"use client";

import { useState, useRef, useEffect } from "react";
import { Transition } from "@headlessui/react";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Switcher } from "@/components";
import WhatsappIcon from "@/public/Icons/WhatsappSVG";

type LinksMobileMenu = {
	title: string;
	href: string;
};

export default function MobileMenu() {
	const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);
	const pathname = usePathname();

	const trigger = useRef<HTMLButtonElement>(null);
	const mobileNav = useRef<HTMLDivElement>(null);

	const links: LinksMobileMenu[] = [
		{ title: "Inicio", href: "hero" },
		{ title: "Quienes somos", href: "about" },
		{ title: "Servicios", href: "services" },
		{ title: "FAQ", href: "faq" },
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
			{/* Phone Button */}
			{/* <Link href="tel:+542994561234">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="28"
					height="28"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round">
					<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
				</svg>
			</Link> */}

			{/* Whatsapp Button */}
			<a href="https://wa.me/5492995233552" className="fill-current mx-5">
				<WhatsappIcon size={28} />
			</a>

			{/* Burquer or Close */}
			<button
				ref={trigger}
				className={`hamburger ${mobileNavOpen && "active"} z-30`}
				aria-controls="mobile-nav"
				aria-expanded={mobileNavOpen}
				onClick={() => setMobileNavOpen(!mobileNavOpen)}>
				{!mobileNavOpen ? (
					<svg
						className="fill-current stroke-neutral-900 dark:stroke-neutral-100"
						xmlns="http://www.w3.org/2000/svg"
						width="28"
						height="28"
						viewBox="0 0 24 24"
						fill="none"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round">
						<line x1="3" y1="12" x2="21" y2="12"></line>
						<line x1="3" y1="6" x2="21" y2="6"></line>
						<line x1="3" y1="18" x2="21" y2="18"></line>
					</svg>
				) : (
					<svg
						className="fill-current stroke-neutral-900 dark:stroke-neutral-100"
						xmlns="http://www.w3.org/2000/svg"
						width="28"
						height="28"
						viewBox="0 0 24 24"
						fill="none"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round">
						<line x1="18" y1="6" x2="6" y2="18"></line>
						<line x1="6" y1="6" x2="18" y2="18"></line>
					</svg>
				)}
			</button>

			<div ref={mobileNav} className="absolute top-0 left-0 z-10 ">
				<Transition
					show={mobileNavOpen}
					as="nav"
					id="mobile-nav"
					className="absolute top-0 h-screen pb-16 z-20 left-0 w-screen overflow-hidden bg-neutral-100 dark:bg-neutral-900"
					enter="transition ease-out duration-200 transform"
					enterFrom="opacity-0 -translate-y-2"
					enterTo="opacity-100 translate-y-0"
					leave="transition ease-out duration-200"
					leaveFrom="opacity-100"
					leaveTo="opacity-0 translate-y-0">
					{pathname === "/" && (
						<ul className="px-5 h-screen flex justify-center items-center flex-col">
							{links.map((e, i) => (
								<li key={i} className="py-3 text-2xl">
									<ScrollLink
										activeClass="active"
										to={e.href}
										spy={true}
										smooth={true}
										offset={-50}
										duration={700}
										onClick={() => setMobileNavOpen(false)}
										className="flex cursor-pointer font-medium w-full text-neutral-900 hover:text-neutral-600 dark:text-neutral-100 dark:hover:text-neutral-400 justify-center">
										{e.title}
									</ScrollLink>
								</li>
							))}
							<li className="py-3 text-2xl flex cursor-pointer font-medium w-full text-neutral-900 hover:text-neutral-600 dark:text-neutral-100 dark:hover:text-neutral-200 justify-center">
								<Link href="/contact" onClick={() => setMobileNavOpen(false)}>
									Contacto
								</Link>
							</li>
						</ul>
					)}

					{pathname !== "/" && (
						<ul className="px-5 h-screen flex justify-center items-center flex-col">
							<li className="py-3 text-2xl flex cursor-pointer font-medium w-full text-neutral-900 hover:text-neutral-600 dark:text-neutral-100 dark:hover:text-neutral-200 justify-center">
								<Link href="/" onClick={() => setMobileNavOpen(false)}>
									Volver a inicio
								</Link>
							</li>
						</ul>
					)}

					<div className="absolute z-20 top-3 left-3">
						<Switcher />
					</div>
				</Transition>
			</div>
		</div>
	);
}
