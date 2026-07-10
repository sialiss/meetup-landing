interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export default function Textarea({ ...props }: Props) {
	return (
		<textarea
			{...props}
			className="min-h-[180px] w-full resize-none border border-neutral-300 bg-white p-5 outline-none transition focus:border-[#FFD400]"
		/>
	)
}
