export const IconID = {
	MENU: 'menu',
	ENLARGE: 'enlarge',
	GITHUB: 'github',
	DIMINISH: 'diminish',
} as const;
export type IconIDTypes = (typeof IconID)[keyof typeof IconID];
