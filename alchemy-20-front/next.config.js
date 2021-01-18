module.exports = {
	env: {
		endpoint: process.env.endpoint,
		get_api_key: process.env.get_api_key,
	},
	images: {
		domains: ['i.imgur.com', 'imgur.com'],
	},
	async redirects() {
		return [
			{
				source: '/newsletter',
				destination: 'https://pdfhost.io/v/.vg7Xs2MD_Untitled1_newsletter_final_compressedpdf.pdf',
				permanent: true,
			},
			{
				source: '/magazine',
				destination: 'https://pdfhost.io/v/c2NmfZmZq_Magazinepdf.pdf',
				permanent: true,
			},
		];
	},
};
