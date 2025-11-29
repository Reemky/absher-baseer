import { LinearGradientProps } from 'expo-linear-gradient';

export interface IDigitalDocumentItem {
	id: number;
	title: string;
	colors: {
		background: LinearGradientProps['colors'];
		logoTint: string;
	};
	onPress?: () => void;
}
