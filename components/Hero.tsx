import Link from "next/link";
import React from "react";

function Hero() {
	return (
		<section className="relative bg-[url(/public/justice.jpg)] bg-cover bg-center bg-no-repeat">
			<div
				className="absolute inset-0 bg-white/75 sm:from-white/95
      sm:to-white/25 dark:bg-black/75  dark:sm:from-black/95 dark:sm:to-black/25 sm:bg-gradient-to-r "></div>

			<div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
				<div className="max-w-xl text-center sm:text-start">
					<h1 className="text-3xl font-extrabold sm:text-5xl">
						Soluciones para tus
						<strong className="block font-extrabold">Problemas legales.</strong>
					</h1>

					<p className="mt-4 max-w-lg sm:text-xl/relaxed">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!
					</p>

					<div className="mt-8 flex flex-wrap text-center">
						<Link
							href="/contact"
							className="block w-full rounded border border-neutral-900 dark:border-neutral-100 bg-neutral-900 dark:bg-neutral-100 ms-3 px-5 py-2 text-sm font-medium text-neutral-200 dark:text-neutral-900 hover:bg-neutral-100 hover:text-neutral-900 dark:hover:bg-neutral-900 dark:hover:text-neutral-100 focus:outline-none focus:ring active:text-neutral-50 transition duration-300 sm:w-auto">
							Contacto
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Hero;
