"use client"

import { useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"
import type { Swiper as SwiperType } from "swiper"

import { ChevronLeft, ChevronRight } from "lucide-react"

import "swiper/css"
import "swiper/css/pagination"

import Container from "../layout/Container"
import SectionTitle from "../ui/SectionTitle"
import TeamCard from "../ui/TeamCard"
import { team } from "@/data/team"

function chunk<T>(array: T[], size: number) {
	const result: T[][] = []

	for (let i = 0; i < array.length; i += size) {
		result.push(array.slice(i, i + size))
	}

	return result
}

export default function Team() {
	const swiperRef = useRef<SwiperType | null>(null)

	const pages = chunk(team, 4)

	return (
		<section className="py-28">
			<Container>
				<SectionTitle>Команда</SectionTitle>

				<div className="relative mt-16 mx-auto">
					<button
						onClick={() => swiperRef.current?.slidePrev()}
						className="absolute left-[-3%] top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-yellow-400 transition hover:bg-yellow-300"
					>
						<ChevronLeft size={20} />
					</button>

					<button
						onClick={() => swiperRef.current?.slideNext()}
						className="absolute right-[-3%] top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-yellow-400 transition hover:bg-yellow-300"
					>
						<ChevronRight size={20} />
					</button>

					<Swiper
						modules={[Pagination]}
						slidesPerView={1}
						pagination={{ clickable: true }}
						onSwiper={swiper => (swiperRef.current = swiper)}
					>
						{pages.map((page, index) => (
							<SwiperSlide key={index}>
								<div
									className="grid justify-center gap-8"
									style={{
										gridTemplateColumns: `repeat(${page.length}, 22%)`,
									}}
								>
									{page.map(member => (
										<TeamCard
											key={member.name}
											{...member}
										/>
									))}
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</Container>
		</section>
	)
}
