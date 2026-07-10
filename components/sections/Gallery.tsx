"use client"

import { useState } from "react"
import Image from "next/image"
import { basePath } from "@/lib/basePath"
import { ChevronLeft, ChevronRight } from "lucide-react"

import Container from "../layout/Container"
import { gallery } from "@/data/gallery"

const IMAGE_WIDTH = 118
const VISIBLE_COUNT = 5

const createSlides = (start: number) => {
	const result: string[] = []

	result.push(gallery[(start - 1 + gallery.length) % gallery.length])

	for (let i = 0; i < VISIBLE_COUNT; i++) {
		result.push(gallery[(start + i) % gallery.length])
	}

	result.push(gallery[(start + VISIBLE_COUNT) % gallery.length])

	return result
}

export default function Gallery() {
	const [slides, setSlides] = useState(() => createSlides(0))

	const [translate, setTranslate] = useState(-IMAGE_WIDTH)
	const [transition, setTransition] = useState(true)
	const [isAnimating, setIsAnimating] = useState(false)
	const [direction, setDirection] = useState<"next" | "prev" | null>(null)

	const next = () => {
		if (isAnimating) return

		setDirection("next")
		setIsAnimating(true)
		setTransition(true)
		setTranslate(-IMAGE_WIDTH * 2)
	}

	const prev = () => {
		if (isAnimating) return

		setDirection("prev")
		setIsAnimating(true)
		setTransition(true)
		setTranslate(0)
	}

	const handleTransitionEnd = () => {
		if (!direction) return

		setTransition(false)

		setSlides(prevSlides => {
			if (direction === "next") {
				const nextImage = prevSlides[1]

				return [...prevSlides.slice(1), nextImage]
			}

			const prevImage = prevSlides[prevSlides.length - 2]

			return [prevImage, ...prevSlides.slice(0, prevSlides.length - 1)]
		})

		setTranslate(-IMAGE_WIDTH)

		requestAnimationFrame(() => {
			requestAnimationFrame(() => {
				setTransition(true)
				setDirection(null)
				setIsAnimating(false)
			})
		})
	}

	return (
		<section className="bg-white pb-28">
			<Container className="flex justify-center">
				<div className="flex h-[108px] border border-[#222]">
					<button
						onClick={prev}
						className="z-10 flex w-[56px] items-center justify-center border-r border-[#222] bg-[#FFD400]"
					>
						<ChevronLeft size={22} />
					</button>

					<div
						className="overflow-hidden"
						style={{
							width: IMAGE_WIDTH * VISIBLE_COUNT,
						}}
					>
						<div
							onTransitionEnd={handleTransitionEnd}
							className="flex"
							style={{
								width: IMAGE_WIDTH * slides.length,
								transform: `translateX(${translate}px)`,
								transition: transition
									? "transform .3s ease"
									: "none",
							}}
						>
							{slides.map((image, index) => (
								<div
									key={`${index}-${image}`}
									className="relative shrink-0 border-r border-[#FFD400]"
									style={{
										width: IMAGE_WIDTH,
										height: 108,
									}}
								>
									<Image
										src={basePath + "/" + image}
										alt=""
										fill
										draggable={false}
										loading="eager"
										className="pointer-events-none object-cover select-none"
									/>
								</div>
							))}
						</div>
					</div>

					<button
						onClick={next}
						className="z-10 flex w-[56px] items-center justify-center border-l border-[#222] bg-[#FFD400]"
					>
						<ChevronRight size={22} />
					</button>
				</div>
			</Container>
		</section>
	)
}
