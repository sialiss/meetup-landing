import { ButtonHTMLAttributes } from "react"
import clsx from "clsx"

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: "primary" | "secondary"
}

export default function Button({
	variant = "primary",
	className,
	children,
	...props
}: Props) {
	return (
		<button
			{...props}
			className={clsx(
				"h-12 px-8 uppercase text-sm tracking-wider transition-all duration-300",
				variant === "primary"
					? "bg-[#FFD400] text-black hover:bg-[#e8c100]"
					: "border border-[#FFD400] text-white hover:bg-[#FFD400] hover:text-black",
				className,
			)}
		>
			{children}
		</button>
	)
}
