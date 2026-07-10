import Button from "../ui/Button"
import Textarea from "../ui/Textarea"
import Image from "next/image"

export default function Contact() {
	return (
		<section id="contacts" className="relative h-screen">
			<div className="grid min-h-[100%] grid-cols-2">
				{/* Карта */}
				<div className="relative">
					<iframe
						title="map"
						src="https://www.google.com/maps?q=Saint+Petersburg&output=embed"
						className="absolute inset-0 h-full w-full border-0"
					/>

					<div className="absolute top-8 right-8 w-[250px] bg-white p-6 shadow-lg">
						<h3 className="mb-4 text-3xl font-bold">Контакты</h3>

						<div className="space-y-2 text-base leading-6">
							<p>Санкт-Петербург</p>
							<p>team@piterjs.org</p>
						</div>

						<div className="mt-5 flex gap-3">
							<Image
								src="/images/icons/social/t.png"
								alt=""
								width={28}
								height={28}
							/>
							<Image
								src="/images/icons/social/vk.png"
								alt=""
								width={28}
								height={28}
							/>
							<Image
								src="/images/icons/social/github.png"
								alt=""
								width={28}
								height={28}
							/>
							<Image
								src="/images/icons/social/www.youtube.png"
								alt=""
								width={28}
								height={28}
							/>
						</div>
					</div>
				</div>

				{/* Правая часть */}
				<div className="flex pl-[10%] bg-white">
					<div className="w-full max-w-[420px] pt-10">
						<p className="text-lg leading-7">
							Приходите на следующий митап, выступайте с
							докладами, предлагайте темы и становитесь частью
							сообщества, которое развивается вместе с индустрией.
						</p>

						<h4 className="mt-10 mb-4 text-xl font-bold">
							Свяжитесь с нами
						</h4>

						<div>
							<Textarea placeholder="Написать..." />

							<Button className="mt-3 flex h-10 w-[140px] items-center justify-center border border-black bg-white ">
								ОТПРАВИТЬ
							</Button>
						</div>

						<div className="mt-10">
							<p className="mb-5 font-bold">@piterjs</p>

							{/* <div className="flex gap-8">
								<Image
									src="/images/icons/social/mail.svg"
									alt=""
									width={38}
									height={38}
								/>
								<Image
									src="/images/icons/social/telegram-outline.svg"
									alt=""
									width={38}
									height={38}
								/>
								<Image
									src="/images/icons/social/instagram.svg"
									alt=""
									width={38}
									height={38}
								/>
								<Image
									src="/images/icons/social/search.svg"
									alt=""
									width={38}
									height={38}
								/>
							</div> */}
						</div>
					</div>
				</div>
			</div>

			<div className="pointer-events-none absolute inset-x-0 bottom-0 h-30 bg-gradient-to-t from-black/30 to-transparent" />

			<Image
				src="/images/black logo.png"
				alt="PiterJS"
				width={60}
				height={60}
				className="absolute bottom-6 left-1/2 -translate-x-1/2"
			/>
		</section>
	)
}
