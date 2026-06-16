import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	experimental: {
		svgr: true,
	} as any,
	turbopack: {
		rules: {
			'*.svg': {
				loaders: [
					{
						loader: '@svgr/webpack',
						options: {
							icon: true,
							typescript: true,
							svgo: true,
							svgoConfig: {
								plugins: [
									{ name: 'removeDimensions', active: true },
									{ name: 'removeViewBox', active: false },
								],
							},
						},
					},
				],
				as: '*.js',
			},
		},
	},
	webpack: (config) => {
		const fileLoaderRule = config.module.rules.find(
			(rule: { test?: { test?: (s: string) => boolean } }) =>
				rule.test?.test?.('.svg'),
		);
		if (fileLoaderRule) fileLoaderRule.exclude = /\.svg$/i;

		config.module.rules.push({
			test: /\.svg$/i,
			use: [
				{
					loader: '@svgr/webpack',
					options: {
						icon: true,
						typescript: true,
						svgo: true,
						svgoConfig: {
							plugins: [
								{ name: 'removeDimensions', active: true },
								{ name: 'removeViewBox', active: false },
							],
						},
					},
				},
			],
		});

		return config;
	},
};

export default nextConfig;
