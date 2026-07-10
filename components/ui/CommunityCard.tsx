import Image from "next/image"
import { basePath } from "@/lib/basePath"

interface Props {
	title: string
	description: string
	image: string
}

export default function CommunityCard({ title, description, image }: Props) {
	return (
		<article className="flex items-start gap-5">
			<div className="relative h-68 w-68 shrink-0">
				<Image
					src={basePath + "/" + image}
					alt={title}
					fill
					className="object-contain"
				/>
			</div>

			<div>
				<h3 className="mb-2 text-[34px] font-bold leading-none">
					{title}
				</h3>

				<p className="text-sm leading-6 text-[#444]">{description}</p>
			</div>
		</article>
	)
}
