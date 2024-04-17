export const IconID = {
	NAV_DASHBOARD: 'nav-dashboard',
} as const;
export type IconIDTypes = (typeof IconID)[keyof typeof IconID];
