type Props = {
	showModal: boolean;
	handleModal: () => void;
	status: number;
};

function Popup({ showModal, handleModal, status }: Props) {
	return (
		<div id="modal" className={`${showModal ? "block" : "hidden"} fixed inset-0 flex items-center justify-center z-50`}>
			<div className="absolute w-screen h-screen bg-neutral-900/50 backdrop-blur-sm"></div>
			<div
				role="alert"
				className="fixed top-16 rounded-xl border border-neutral-100 bg-neutral-100 p-4 shadow-xl dark:border-neutral-800 dark:bg-neutral-900">
				<div className="flex items-start gap-4">
					<span>
						{status === 200 ? (
							<svg
								className="h-6 w-6 text-green-600"
								xmlns="http://www.w3.org/2000/svg"
								width="28"
								height="28"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round">
								<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
								<polyline points="22 4 12 14.01 9 11.01"></polyline>
							</svg>
						) : (
							<svg
								className="h-6 w-6 text-red-500"
								xmlns="http://www.w3.org/2000/svg"
								width="28"
								height="28"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round">
								<circle cx="12" cy="12" r="10"></circle>
								<line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>
							</svg>
						)}

						{/* className="h-6 w-6"> */}
					</span>
					{status === 200 ? (
						<div>
							<strong className="font-medium text-neutral-900 dark:text-white">Consulta enviada</strong>
							<p className="mt-1 text-sm text-neutral-700 dark:text-neutral-200">Tu consulta se envió con exito.</p>
						</div>
					) : (
						<div>
							<strong className="font-medium text-neutral-900 dark:text-white">Ups, algo salio mal</strong>
							<p className="mt-1 text-sm text-neutral-700 dark:text-neutral-200">Hubo un error al enviar tu consulta.</p>
						</div>
					)}
					<button
						onClick={handleModal}
						className="text-neutral-500 transition hover:text-neutral-600 dark:text-neutral-400 dark:hover:text-neutral-500">
						<span className="sr-only"></span>

						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							stroke="currentColor"
							className="h-6 w-6">
							<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>
				</div>
			</div>
		</div>
	);
}

export default Popup;
