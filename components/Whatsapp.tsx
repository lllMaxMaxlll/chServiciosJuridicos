import WhatsappIcon from "@/public/Icons/WhatsappSVG";

export default function Whatsapp() {
	return (
		<div className="fixed bottom-0 right-0 hidden md:block md:bottom-8 md:right-12 md:w-auto z-50">
			<a href="https://wa.me/5492995233552" className="hover:bg-green-500">
				<div className="bg-neutral-800 dark:bg-neutral-100 fill-neutral-100 dark:fill-neutral-900 hover:bg-green-500 dark:hover:bg-green-500 dark:hover:fill-neutral-100 p-4 md:rounded-full shadow-lg flex content-center justify-center">
					<WhatsappIcon />
				</div>
			</a>
		</div>
	);
}
