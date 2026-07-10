import Image from "next/image"
import { basePath } from "@/lib/basePath"

interface Props {
	image: string
	name: string
}

export default function TeamCard({ image, name }: Props) {
	return (
		<article className="group">
			<div className="relative aspect-[4/5] overflow-hidden">
				<Image
					src={basePath+"/"+image}
					alt={name}
					fill
					className="object-cover transition duration-500 group-hover:scale-105"
				/>
			</div>

			<div className="bg-white py-5">
				<h3 className="text-xl font-semibold">{name}</h3>
			</div>
		</article>
	)
}
