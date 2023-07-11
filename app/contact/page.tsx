"use client";

import { useRef, SyntheticEvent, useState } from "react";
import { useRouter } from "next/navigation";
import emailjs from "@emailjs/browser";
import { Popup } from "@/components";

function Contact(): JSX.Element {
	const form = useRef<HTMLFormElement>(null);
	const router = useRouter();
	const [showModal, setShowModal] = useState(false);
	const [status, setStatus] = useState(200);
	const [loading, setLoading] = useState(false);

	const handleModal = () => {
		setShowModal((prev) => !prev);
		router.push("/");
	};

	const sendEmail = (e: SyntheticEvent) => {
		e.preventDefault();

		if (form.current) {
			setLoading(true);
			emailjs
				.sendForm("service_30l86wn", "template_iadxp59", form.current, "c7MpZ67K8g-n7IMnj")
				.then((result) => {
					setStatus(200);
					setLoading(false);
					setShowModal(true);
					console.log(result.text);
				})
				.catch((error) => {
					setStatus(400);
					setLoading(false);
					setShowModal(true);
					console.log(error.text);
				});
		}
	};

	return (
		<>
			<Popup handleModal={handleModal} showModal={showModal} status={status} />
			<div className="relative flex items-top justify-center min-h-screen sm:items-center">
				<div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
					<div className="mt-20 md:mt-8 md:overflow-hidden">
						<div className="grid grid-cols-1 md:grid-cols-2">
							<div className="p-6 mr-2" data-aos="fade-down">
								<h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Contactanos</h2>
								<p className="text-normal text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 mt-2">
									Completa el formulario para enviarnos tu consulta y te contactaremos a la brevedad.
								</p>

								<div className="flex items-center mt-8">
									<svg
										fill="none"
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="1.5"
										viewBox="0 0 24 24"
										className="w-8 h-8">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="1.5"
											d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
										/>
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
									</svg>
									<a
										href="https://goo.gl/maps/QsTxVRgwmVWJKHA66"
										target="_blank"
										className="ml-4 text-md font-semibold transition hover:opacity-75">
										Cipolletti, Río Negro, Argentina
									</a>
								</div>

								<div className="flex items-center mt-4">
									<svg
										fill="none"
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="1.5"
										viewBox="0 0 24 24"
										className="w-8 h-8 ">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="1.5"
											d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
										/>
									</svg>
									<a href="tel:+542995233552" className="ml-4 text-md font-semibold transition hover:opacity-75">
										+54 299 5233552
									</a>
								</div>

								<div className="flex items-center mt-4">
									<svg
										fill="none"
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="1.5"
										viewBox="0 0 24 24"
										className="w-8 h-8 ">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="1.5"
											d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
										/>
									</svg>
									<a href="mailto:ch.servicio.juridico@gmail.com" className="ml-4 text-md font-semibold transition hover:opacity-75">
										ch.servicio.juridico@gmail.com
									</a>
								</div>
							</div>

							<form ref={form} onSubmit={sendEmail} className="p-6 flex flex-col justify-center" data-aos="fade-down" data-aos-delay="200">
								<label htmlFor="user_name" className="block text-xs font-medium">
									Nombre completo
								</label>

								<input
									required
									type="text"
									id="user_name"
									name="user_name"
									placeholder="Nombre Apellido"
									className="h-8 mt-1 w-full bg-transparent p-0 border rounded-md border-neutral-400 px-3 py-5 shadow-sm focus-within:border-neutral-600 focus-within:ring-1 focus-within:ring-neutral-700 sm:text-sm"
								/>

								<label htmlFor="user_email" className="block text-xs font-medium mt-3">
									Email
								</label>

								<input
									required
									type="email"
									id="user_email"
									name="user_email"
									placeholder="miemail@gmail.com"
									className="h-8 mt-1 w-full bg-transparent p-0 border rounded-md border-neutral-400 px-3 py-5 shadow-sm focus-within:border-neutral-600 focus-within:ring-1 focus-within:ring-neutral-700 sm:text-sm"
								/>

								<label htmlFor="message" className="block text-xs font-medium mt-3">
									Detalla tu consulta
								</label>
								<textarea
									required
									id="message"
									name="message"
									className="resize-none w-full rounded-md bg-transparent border border-neutral-400 p-3 my-1 text-sm"
									placeholder="Necesito solucionar un conflicto con..."
									rows={8}></textarea>

								<button
									type="submit"
									value="Send"
									className="rounded w-36 border border-neutral-900 dark:border-neutral-100 bg-neutral-900 dark:bg-neutral-100 mt-2 px-5 py-2 text-sm font-medium text-neutral-200 dark:text-neutral-900 hover:bg-transparent hover:text-neutral-900 dark:hover:bg-transparent dark:hover:text-neutral-100 focus:outline-none focus:ring active:text-neutral-50 transition duration-300">
									{loading ? (
										<div
											className="inline-block h-4 w-4 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
											role="status">
											<span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"></span>
										</div>
									) : (
										"Enviar"
									)}
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Contact;

//
