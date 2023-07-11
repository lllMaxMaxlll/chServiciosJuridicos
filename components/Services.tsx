const services = [
	{
		title: "Derecho de Familia",
		description:
			"Casos de divorcio, custodia de menores, adopciones, acuerdos prenupciales y otros asuntos relacionados con el derecho de familia.",
	},
	{
		title: "Derecho Laboral",
		description:
			"Despidos injustificados, acoso laboral, discriminación en el trabajo, conflictos sindicales, accidentes de trabajo, y cobro de prestaciones laborales",
	},
	{
		title: "Derecho Penal",
		description: "Casos de delitos menores y graves, asistiendo en tu proceso legal y protegiendo tus derechos en cada etapa.",
	},
	{
		title: "Derecho Inmobiliario",
		description:
			"Asuntos relacionados con bienes raíces, como compraventa de propiedades, contratos de arrendamiento, resolución de disputas de propiedades y asesoramiento en transacciones inmobiliarias.",
	},
	{
		title: "Derecho Civil",
		description:
			"Casos de responsabilidad civil, contratos, disputas de propiedades, reclamaciones por daños y perjuicios, defensa del consumidor, fideicomisos y más.",
	},
	{
		title: "Derecho Sucesorio",
		description: "Planificación patrimonial, testamentos, sucesiones y administración de propiedades.",
	},
];

function Services() {
	return (
		<section id="services">
			<div className="max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8 mx-auto">
				<div className="max-w-xl">
					<h2 className="text-3xl font-bold sm:text-4xl" data-aos="fade-zoom-in">
						Nuestros servicios
					</h2>

					<p className="mt-4 text-neutral-900 dark:text-neutral-200" data-aos="fade-zoom-in" data-aos-delay="200">
						Ofrecemos una amplia gama de servicios legales diseñados para brindarte soluciones efectivas y proteger tus derechos. Ya sea que
						necesites asesoramiento, representación o soluciones estratégicas, estamos aquí para ayudarte en cada paso del camino.
					</p>
				</div>

				<div
					className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3"
					data-aos="fade-zoom-in"
					data-aos-delay="200">
					{services.map((service, index) => (
						<div className="flex items-start gap-4" key={index}>
							<span className="shrink-0 rounded-lg p-4">
								<svg
									className="h-5 w-5 fill-neutral-900 dark:fill-neutral-200"
									width="24"
									height="24"
									viewBox="0 0 48 48"
									xmlns="http://www.w3.org/2000/svg">
									<g id="Layer_2" data-name="Layer 2">
										<g id="invisible_box" data-name="invisible box">
											<rect width="48" height="48" fill="none" />
										</g>
										<g id="Q3_icons" data-name="Q3 icons">
											<g>
												<rect x="5" y="36" width="38" height="4" />
												<path d="M44,42H4a2,2,0,0,0-2,2v2H46V44A2,2,0,0,0,44,42Z" />
												<rect x="10" y="18" width="4" height="16" />
												<rect x="22" y="18" width="4" height="16" />
												<rect x="34" y="18" width="4" height="16" />
												<path d="M44.9,11.4,24,2,3.1,11.4A2.1,2.1,0,0,0,2,13.2V14a2,2,0,0,0,2,2H44a2,2,0,0,0,2-2v-.8A2.1,2.1,0,0,0,44.9,11.4ZM11.6,12,24,6.4,36.4,12Z" />
											</g>
										</g>
									</g>
								</svg>
							</span>

							<div>
								<h2 className="text-lg font-bold">{service.title}</h2>

								<p className="mt-1  text-neutral-900 dark:text-neutral-200">{service.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default Services;
