interface Props {
	title: string
	description: string
}

export default function FeatureCard({ title, description }: Props) {
	return (
		<article>
			<h3 className="mb-4 text-lg font-semibold leading-7">{title}</h3>

			<p className="text-sm leading-7 text-neutral-600">{description}</p>
		</article>
	)
}
