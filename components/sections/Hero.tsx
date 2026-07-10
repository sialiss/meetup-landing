import Container from "../layout/Container"
import Button from "../ui/Button"
import Image from "next/image"
import { basePath } from "@/lib/basePath"

export default function Hero() {
	return (
		<section className="relative flex min-h-screen items-center overflow-hidden">
			<Image
				src={`${basePath}/images/hero.png`}
				alt=""
				fill
				className="absolute inset-0 h-full w-full object-cover"
			/>

			<div className="absolute inset-0 bg-black/55" />

			<Container className="relative z-10">
				<div className="max-w-[620px] pt-24">
					{/* <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#FFD400]">
						JS Meetup
					</p> */}

					<h1 className="mb-4 text-5xl font-bold leading-tight text-white md:text-7xl">
						PiterJS митап
					</h1>

					<p className="mb-10 text-lg leading-8 text-white/80">
						Ежемесячный митап в Санкт-Петербурге.
						<br />
						JavaScript, TypeScript, Node.js и современные
						веб-технологии.
					</p>

					<div className="flex flex-col gap-4 sm:flex-row">
						<Button>Стать спикером</Button>

						<Button variant="secondary">Поддержать нас</Button>
					</div>
				</div>
			</Container>
		</section>
	)
}
