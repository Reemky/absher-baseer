import { ImageSourcePropType } from 'react-native';

export interface IDocumentDisplayModalProps {
	visible: boolean;
	images: ImageSourcePropType[];
	onClose: () => void;
}
