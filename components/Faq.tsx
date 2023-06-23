import Image from "next/image";
import Acordeon from "./Acordeon";

function Faq() {
	return (
		<section id="faq">
			<div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
				<div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-16">
					<div className="space-y-3">
						<p className="mt-4 text-neutral-600 dark:text-neutral-400" data-aos="fade-down">
							Preguntas y respuestas frecuentes
						</p>
						<h2 className="text-3xl font-bold sm:text-4xl" data-aos="fade-down">
							FAQS
						</h2>
						<Acordeon />
					</div>
					<div
						className="pt-5 h-48 overflow-hidden rounded-lg sm:block order-first md:h-full mx-auto"
						data-aos="fade-down"
						data-aos-delay="300">
						<Image src="/faq.jpg" alt="about" width={900} height={300} className="h-full object-cover rounded-lg" />
					</div>
				</div>
			</div>
		</section>
	);
}

export default Faq;
