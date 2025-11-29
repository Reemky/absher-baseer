import { LinearGradientProps } from 'expo-linear-gradient';
import { ImageSourcePropType } from 'react-native';

export interface IDigitalDocumentItem {
	id: number;
	title: string;
	colors: {
		background: LinearGradientProps['colors'];
		logoTint: string;
	};
	images?: ImageSourcePropType[];
	onPress?: () => void;
}
