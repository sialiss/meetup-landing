import Container from "../layout/Container"
import SectionTitle from "../ui/SectionTitle"
import CommunityCard from "../ui/CommunityCard"
import { community } from "@/data/community"

export default function Community() {
	return (
		<section className="bg-white py-28">
			<Container className="max-w-[1100px]">
				<SectionTitle>Присоединяйтесь к сообществу</SectionTitle>

				<div className="mt-20 grid gap-x-20 gap-y-14 md:grid-cols-2">
					{community.map(item => (
						<CommunityCard key={item.title} {...item} />
					))}
				</div>
			</Container>
		</section>
	)
}
