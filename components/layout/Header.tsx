"use client"

import Container from "./Container"
import Image from "next/image"
import { basePath } from "@/lib/basePath"

const nav = [
	{
		label: "О нас",
		href: "#about",
	},
	{
		label: "Митапы",
		href: "https://piterjs.org/",
		external: true,
	},
	{
		label: "Контакты",
		href: "#contacts",
	},
]

export default function Header() {
	return (
		<header className="absolute left-0 top-0 z-50 w-full">
			<Container>
				<div className="flex h-24 items-center justify-between">
					<div className="flex items-center">
						<Image
							src={`${basePath}/images/logo.png`}
							alt="JS"
							width={40}
							height={40}
							className="h-12 w-auto"
						/>
					</div>

					<nav className="items-center gap-10 lg:flex">
						{nav.map(item => (
							<a
								key={item.href}
								href={item.href}
								{...(item.external && {
									target: "_blank",
									rel: "noopener noreferrer",
								})}
								className="text-xs uppercase tracking-[0.2em] text-white transition hover:text-[#FFD400]"
							>
								{item.label}
							</a>
						))}
					</nav>

					<button className="flex h-10 w-10 flex-col items-center justify-center gap-1 lg:hidden">
						<span className="h-[2px] w-6 bg-white"></span>
						<span className="h-[2px] w-6 bg-white"></span>
						<span className="h-[2px] w-6 bg-white"></span>
					</button>
				</div>
			</Container>
		</header>
	)
}
