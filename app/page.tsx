import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"

import Hero from "@/components/sections/Hero"
import Features from "@/components/sections/Features"
import Gallery from "@/components/sections/Gallery"
import Audience from "@/components/sections/Audience"
import Vision from "@/components/sections/Vision"
import Team from "@/components/sections/Team"
import Community from "@/components/sections/Community"

export default function Home() {
	return (
		<>
			<Header />

			<main>
				<Hero />
				<Features />
				<Gallery />
				<Audience />
				<Vision />
				<Team />
				<Community />
			</main>

			<Footer />
		</>
	)
}
