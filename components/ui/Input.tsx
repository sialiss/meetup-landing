interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function Input({ ...props }: Props) {
	return (
		<input
			{...props}
			className="h-14 w-full border border-neutral-300 bg-white px-5 outline-none transition focus:border-[#FFD400]"
		/>
	)
}
