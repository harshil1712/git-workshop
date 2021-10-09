module.exports = {
	siteMetadata: {
		siteUrl: 'https://www.yourdomain.tld',
		title: 'git-workshop',
	},
	plugins: [
		'gatsby-plugin-image',
		'gatsby-transformer-remark',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		'gatsby-plugin-postcss',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'contributors',
				path: './data/',
			},
			__key: 'contributors',
		},
	],
};
