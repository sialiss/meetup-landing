import type { NextConfig } from "next"

const nextConfig: NextConfig = {
	output: "export",
	images: {
		unoptimized: true,
	},
	basePath: "/meetup-landing",
	assetPrefix: "/meetup-landing/",
}

export default nextConfig
