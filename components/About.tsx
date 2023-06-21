import Image from "next/image";

function About() {
	return (
		<section id="about">
			<div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
				<div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
					<div
						className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full"
						data-aos="fade-right"
						data-aos-delay="200">
						<Image src="/about.png" alt="about" width={700} height={500} className="absolute inset-0 h-full w-full object-cover" />
					</div>

					<div className="lg:py-24" data-aos="fade-right">
						<p className="mt-4 text-neutral-600 dark:text-neutral-400">Creemos en la justicia</p>
						<h2 className="text-3xl font-bold sm:text-4xl">Quienes somos</h2>
						<p className="mt-4 text-neutral-600 dark:text-neutral-400">
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic atque tenetur quis eius quos ea neque sunt, accusantium
							soluta minus veniam tempora deserunt? Molestiae eius quidem quam repellat.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;
