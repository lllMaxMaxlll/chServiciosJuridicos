import Image from "next/image";

function About() {
	return (
		<section id="about">
			<div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
				<div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-16">
					<div className="relative h-48 overflow-hidden rounded-lg order-last md:h-full" data-aos="fade-right" data-aos-delay="200">
						<Image src="/about.png" alt="about" width={700} height={500} className="absolute inset-0 h-full w-full object-cover" />
					</div>

					<div className="lg:py-24" data-aos="fade-right">
						<p className="mt-4 text-neutral-600 dark:text-neutral-400">Creemos en la justicia</p>
						<h2 className="text-3xl font-bold sm:text-4xl">Quienes somos</h2>
						<p className="mt-4 text-neutral-600 dark:text-neutral-400">
							Somos un equipo comprometido de abogados apasionados por brindar soluciones efectivas a tus problemas legales. Con una sólida
							trayectoria y experiencia en diversas áreas del derecho, nos dedicamos a proteger tus derechos y defender tus intereses con
							profesionalismo y ética
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;
