/**
 * All of these values are used throughout the site – for example, 
 * in the <meta> tags, in the footer, and in the RSS feed.
 * 
 * PLEASE BE SURE TO UPDATE THEM ALL! Thank you!
 **/ 

export const siteTitle = 'auxilium.guide'
export const siteDescription = 'Auxlium Guide'
export const siteURL = 'example.com'
export const siteLink = 'https://github.com/josh-collinsworth/sveltekit-article-starter'
export const siteAuthor = '- Chris Thnay-Hu'

// Controls how many posts are shown per page on the main article index pages
export const postsPerPage = 10

// Edit this to alter the main nav menu. (Also used by the footer and mobile nav.)
export const navItems = [
	{
		title: 'Home',
		route: '/'
	},
	{
		title: 'Article',
		route: '/article'
	}, {
			title: 'About',
		route: '/about'
	}, {
		title: 'Contact',
		route: '/contact' 
	},
]