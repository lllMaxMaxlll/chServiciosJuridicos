import Link from "next/link";
import React from "react";

function Hero() {
	return (
		<section className="relative bg-[url(/public/justice.jpg)] bg-cover bg-center bg-no-repeat">
			<div className="absolute inset-0 bg-black/75  sm:from-black/95 sm:to-black/25 sm:bg-gradient-to-r "></div>

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
							className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-neutral-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto">
							Contacto
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Hero;
