export interface IQuickActionItem {
	id: number;
	title: string;
	icon: React.ReactNode;
	onPress: () => void;
}
