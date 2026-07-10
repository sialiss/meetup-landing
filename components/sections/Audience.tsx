import Image from "next/image"

import { audience } from "@/data/audience"
import AudienceItem from "../ui/AudienceItem"
import Container from "../layout/Container"

export default function Audience() {
	return (
		<section className="relative h-[900px] overflow-hidden">
			<Image
				src="/images/audience-bg.png"
				alt=""
				fill
				priority
				className="object-cover"
			/>

			<div className="absolute inset-0 bg-white/35" />

			<div
				className="absolute inset-0"
				style={{
					background:
						"linear-gradient(90deg, rgba(255,255,255,.18) 0%, rgba(255,255,255,.72) 38%, rgba(255,255,255,.82) 100%)",
				}}
			/>

			<Container className="relative h-full">
				<div className="mx-auto flex h-full w-[740px] flex-col justify-center">
					<h2 className="mb-16 text-center text-[64px] font-light leading-none text-black">
						Для кого
					</h2>

					<div className="mx-auto w-full max-w-[800px] space-y-10">
						{audience.map(item => (
							<AudienceItem key={item.title} {...item} />
						))}
					</div>
				</div>
			</Container>
		</section>
	)
}
