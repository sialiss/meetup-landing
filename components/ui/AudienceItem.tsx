import Image from "next/image"

interface Props {
	icon: string
	title: string
	description: string
}

export default function AudienceItem({ icon, title, description }: Props) {
	return (
		<div className="flex items-start gap-8">
			<div className="flex h-24 w-24 shrink-0 items-center justify-center">
				<Image src={icon} alt={title} width={96} height={96} />
			</div>

			<div className="pt-2">
				<h3 className="text-[22px] font-bold leading-none text-black">
					{title}
				</h3>

				<p className="mt-2 text-[18px] leading-[1.35] text-[#222]">
					{description}
				</p>
			</div>
		</div>
	)
}
