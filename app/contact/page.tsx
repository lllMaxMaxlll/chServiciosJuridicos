import React from "react";
import Link from "next/link";

function Contact() {
	return (
		<div className="grid h-screen px-4 bg-white place-content-center dark:bg-neutral-900">
			<div className="text-center">
				<h1 className="font-black text-9xl text-neutral-700">404</h1>
				<p className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">Pagina en construccion.</p>
				<Link
					href="/"
					className="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-neutral-600 rounded hover:bg-neutral-700 focus:outline-none focus:ring">
					Volver al inicio
				</Link>
			</div>
		</div>
	);
}

export default Contact;
