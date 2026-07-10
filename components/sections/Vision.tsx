import Container from "../layout/Container"
import SectionTitle from "../ui/SectionTitle"
import AccordionItem from "../ui/AccordionItem"
import { vision } from "@/data/vision"

export default function Vision() {
	return (
		<section id="about" className="bg-[#fafafa] py-28">
			<Container>
				<SectionTitle>Видение организации</SectionTitle>

				<div className="mx-auto mt-20 max-w-4xl space-y-4">
					{vision.map(item => (
						<AccordionItem key={item.title} {...item} />
					))}
				</div>
			</Container>
		</section>
	)
}
