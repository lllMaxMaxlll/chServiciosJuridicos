type Props = {
	title: string;
	message: string;
};

const faqs: Props[] = [
	{
		title: "¿Cuánto tiempo llevará resolver mi caso legal?",
		message:
			"El tiempo necesario para resolver un caso legal puede variar según la complejidad del asunto, los detalles específicos y los procedimientos legales involucrados. En nuestra consulta inicial, evaluaremos tu situación y te brindaremos una estimación del tiempo que podría requerir.",
	},
	{
		title: "¿Cuáles son los costos asociados con los servicios legales?",
		message:
			"Los costos de nuestros servicios legales dependen del tipo de asunto legal y los servicios requeridos. Durante nuestra consulta inicial, discutiremos tus necesidades legales y te proporcionaremos información clara y transparente sobre los honorarios y costos asociados.",
	},
	{
		title: "¿Cuál es el alcance de la confidencialidad en mi caso legal?",
		message:
			"En nuestro estudio jurídico, nos tomamos la confidencialidad muy en serio. Toda la información que compartas con nosotros será tratada con la más estricta confidencialidad y no se divulgará a terceros sin tu consentimiento. ",
	},
	{
		title: "¿Cómo puedo prepararme para mi reunión con el abogado?",
		message:
			"Para aprovechar al máximo tu reunión con nuestro abogado, te recomendamos reunir toda la documentación relevante relacionada con tu caso, como contratos, comunicaciones por escrito, facturas, informes, etc. Además, prepárate para describir detalladamente tu situación y cualquier pregunta o inquietud que tengas. Cuanta más información y contexto podamos obtener, mejor podremos evaluar tu caso y brindarte el asesoramiento adecuado.",
	},
];

function Acordeon() {
	return (
		<>
			{faqs.map((faq, i) => {
				return (
					<details
						key={i}
						className="group [&_summary::-webkit-details-marker]:hidden"
						data-aos="fade-down"
						data-aos-delay="100"
						open={false}>
						<summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-neutral-100 p-4 text-neutral-900 dark:bg-neutral-800 dark:text-white">
							<h2 className="font-medium">{faq.title}</h2>

							<svg
								className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
							</svg>
						</summary>

						<p className="mt-4 px-4 leading-relaxed text-neutral-700 dark:text-neutral-200">{faq.message}</p>
					</details>
				);
			})}
		</>
	);
}

export default Acordeon;
