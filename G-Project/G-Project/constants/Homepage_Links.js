export const HOMEPAGE_LINKS = {
	GMAIL: {name: 'Gmail', link: 'https://mail.google.com/'},
	IMAGES: {name: 'Images', link: 'https://www.google.com/imghp'},
	SIGN_IN: { name: 'Sign In', link: 'https://accounts.google.com/ServiceLogin' },
	ADVERTISING: { name: 'Advertising', link: 'https://ads.google.com/' },
  	BUSINESS: { name: 'Business', link: 'https://www.google.com/services' },
  	ABOUT: { name: 'About', link: 'https://about.google/' },
  	HOW_SEARCH_WORKS: { name: 'How Search works', link: 'https://www.google.com/search/howsearchworks' },
  	PRIVACY: { name: 'Privacy', link: 'https://policies.google.com/privacy' },
  	TERMS: { name: 'Terms', link: 'https://policies.google.com/terms' },
  	SETTINGS: { name: 'Settings', link: 'https://www.google.com/preferences' }
}

export const HOMEPAGE_HEADER_LINKS = [
  HOMEPAGE_LINKS.GMAIL, 
  HOMEPAGE_LINKS.IMAGES, 
  HOMEPAGE_LINKS.SIGN_IN];
export const HOMEPAGE_FOOTER_LEFT_LIST_LINKS = [
  HOMEPAGE_LINKS.ADVERTISING, 
  HOMEPAGE_LINKS.BUSINESS, 
  HOMEPAGE_LINKS.ABOUT, 
  HOMEPAGE_LINKS.HOW_SEARCH_WORKS];
export const HOMEPAGE_FOOTER_RIGHT_LIST_LINKS = [
  HOMEPAGE_LINKS.PRIVACY, 
  HOMEPAGE_LINKS.TERMS, 
  HOMEPAGE_LINKS.SETTINGS];