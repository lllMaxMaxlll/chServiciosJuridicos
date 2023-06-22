function Contact() {
	return (
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
								<div className="ml-4 text-md font-semibold">Calle falsa 123, Cipolletti, Rio Negro</div>
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
								<div className="ml-4 text-md font-semibold">+54 299 4561234</div>
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
								<div className="ml-4 text-md font-semibold">info@acme.org</div>
							</div>
						</div>

						<form className="p-6 flex flex-col justify-center" data-aos="fade-down" data-aos-delay="200">
							<div className="mb-2">
								<label
									htmlFor="userName"
									className="relative block overflow-hidden rounded-md border border-neutral-400 px-3 pt-3 shadow-sm focus-within:border-neutral-600 focus-within:ring-1 focus-within:ring-neutral-700">
									<input
										required
										type="name"
										id="userName"
										placeholder="Nombre Completo"
										className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
									/>

									<span className="absolute start-3 top-3 -translate-y-1/2 text-xs transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs ">
										Nombre Completo
									</span>
								</label>
							</div>

							<div className="mt-2">
								<label
									htmlFor="UserEmail"
									className="relative block overflow-hidden rounded-md border border-neutral-400 px-3 pt-3 shadow-sm focus-within:border-neutral-600 focus-within:ring-1 focus-within:ring-neutral-700">
									<input
										required
										type="email"
										id="UserEmail"
										placeholder="Email"
										className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
									/>

									<span className="absolute start-3 top-3 -translate-y-1/2 text-xs  transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs dark:text-neutral-200">
										Email
									</span>
								</label>
							</div>

							<div className="mt-4">
								<textarea
									required
									className="resize-none w-full rounded-md bg-transparent border border-neutral-400 p-3 text-sm"
									placeholder="Describi tu consulta"
									rows={8}
									id="message"></textarea>
							</div>

							<button
								type="submit"
								className="rounded w-36 border border-neutral-900 dark:border-neutral-100 bg-neutral-900 dark:bg-neutral-100 mt-2 px-5 py-2 text-sm font-medium text-neutral-200 dark:text-neutral-900 hover:bg-transparent hover:text-neutral-900 dark:hover:bg-transparent dark:hover:text-neutral-100 focus:outline-none focus:ring active:text-neutral-50 transition duration-300">
								Enviar
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Contact;

//
