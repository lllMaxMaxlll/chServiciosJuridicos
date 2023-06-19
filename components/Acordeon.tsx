import React from "react";

type Props = {
	title: string;
	message: string;
};

const faqs: Props[] = [
	{
		title: "Pregunta 1",
		message:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt temporibus aliquid sequi magni voluptatibus ipsam, fuga alias veniam ipsa culpa.",
	},
	{
		title: "Pregunta 2",
		message:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt temporibus aliquid sequi magni voluptatibus ipsam, fuga alias veniam ipsa culpa.",
	},
	{
		title: "Pregunta 3",
		message:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt temporibus aliquid sequi magni voluptatibus ipsam, fuga alias veniam ipsa culpa.",
	},
	{
		title: "Pregunta 4",
		message:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt temporibus aliquid sequi magni voluptatibus ipsam, fuga alias veniam ipsa culpa.",
	},
];

function Acordeon() {
	return (
		<>
			{faqs.map((faq, i) => (
				<details key={i} className="group [&_summary::-webkit-details-marker]:hidden">
					<summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-neutral-200 p-4 text-neutral-900 dark:bg-neutral-800 dark:text-white">
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
			))}
		</>
	);
}

export default Acordeon;
