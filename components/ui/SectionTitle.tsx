interface Props {
	children: React.ReactNode
}

export default function SectionTitle({ children }: Props) {
	return (
		<h2 className="text-center text-4xl font-light text-[#111] md:text-5xl">
			{children}
		</h2>
	)
}
