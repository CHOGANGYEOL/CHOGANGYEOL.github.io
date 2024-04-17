export const IconID = {
	MENU: 'menu',
	ENLARGE: 'enlarge',
	GITHUB: 'github',
} as const;
export type IconIDTypes = (typeof IconID)[keyof typeof IconID];
