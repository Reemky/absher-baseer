import { Href } from 'expo-router';

export interface IQuickActionItem {
	id: number;
	title: string;
	icon: React.ReactNode;
	/** Used for route navigation once pressed */
	route?: Href;
}
