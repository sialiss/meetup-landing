import Container from "../layout/Container"
import SectionTitle from "../ui/SectionTitle"
import FeatureCard from "../ui/FeatureCard"
import { features } from "@/data/features"

export default function Features() {
	return (
		<section className="bg-white py-24">
			<Container>
				<SectionTitle>Что вас ждёт</SectionTitle>

				<div className="mt-20 grid gap-x-16 gap-y-16 md:grid-cols-2 xl:grid-cols-3">
					{features.map(item => (
						<FeatureCard key={item.title} {...item} />
					))}
				</div>
			</Container>
		</section>
	)
}
