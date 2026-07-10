"use client"

import { useState } from "react"
import Image from "next/image"
import { basePath } from "@/lib/basePath"
import { ChevronDown, Minus } from "lucide-react"

interface Props {
	title: string
	description: string
	icon: string
}

export default function AccordionItem({ title, icon, description }: Props) {
	const [open, setOpen] = useState(false)

	return (
		<div className="rounded-2xl bg-neutral-50">
			<button
				onClick={() => setOpen(!open)}
				className="flex w-full items-start justify-between px-8 py-6 text-left"
			>
				<div className="flex flex-start gap-4 items-center">
					<div>
						<div className="flex items-center">
							<div className="mt-0.5 flex h-8 w-8 shrink-0">
								<Image
									src={basePath+"/"+icon}
									alt=""
									width={24}
									height={24}
								/>
							</div>
							<h3 className="text-xl font-semibold">{title}</h3>
						</div>

						{open && (
							<p className="mt-3 leading-7 text-neutral-600">
								{description}
							</p>
						)}
					</div>
				</div>

				<div className="ml-6 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-neutral-300">
					{open ? <Minus size={18} /> : <ChevronDown size={18} />}
				</div>
			</button>
		</div>
	)
}
