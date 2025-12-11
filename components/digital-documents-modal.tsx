import { MODAL_VERTICAL_GAP } from '@/constants/documents-display-modal';
import React, { useMemo } from 'react';
import {
	Dimensions,
	Image,
	ImageSourcePropType,
	Modal,
	Pressable,
	StyleSheet,
	View,
} from 'react-native';

const CARD_ASPECT_RATIO = 1013 / 638; // width / height

const { width: SCREEN_W, height: SCREEN_H } = Dimensions.get('window');

// Responsive sizing while keeping ratio
const MAX_CARD_W = SCREEN_W - 16 * 2;
const MAX_CARD_H = SCREEN_H * 0.6;
const CARD_W_BY_H = MAX_CARD_H * CARD_ASPECT_RATIO;
const CARD_WIDTH = Math.min(MAX_CARD_W, CARD_W_BY_H);
const CARD_HEIGHT = CARD_WIDTH / CARD_ASPECT_RATIO;

export const DigitalDocumentsModal: React.FC<{
	visible: boolean;
	images: ImageSourcePropType[];
	onClose: () => void;
}> = React.memo(function DocumentDisplayModal({ visible, onClose, images }) {
	const preparedImages = useMemo<ImageSourcePropType[]>(() => {
		if (!images || images.length === 0)
			return [
				require('@/assets/images/fallback-document.png'),
				require('@/assets/images/fallback-document.png'),
			];
		if (images.length === 1) return [images[0], images[0]];
		return images.slice(0, 2);
	}, [images]);

	const bottomImage = preparedImages[0];
	const topImage = preparedImages[1];

	// translate based on computed height (not hardcoded constants)
	const translateY = CARD_HEIGHT / 2 + MODAL_VERTICAL_GAP;

	return (
		<Modal
			visible={visible}
			animationType='fade'
			transparent
			statusBarTranslucent
			onRequestClose={onClose}
			hardwareAccelerated
		>
			<View style={styles.modalRoot} accessible>
				<View style={styles.overlay} />
				<Pressable style={StyleSheet.absoluteFill} onPress={onClose} />

				<View style={styles.center}>
					<View style={styles.stackContainer}>
						<View
							style={[
								styles.cardWrapper,
								{
									width: CARD_WIDTH,
									height: CARD_HEIGHT,
									zIndex: 1,
									transform: [{ translateY }],
								},
							]}
						>
							<Image
								source={topImage}
								style={styles.cardImage}
								resizeMode='contain'
							/>
						</View>

						<View
							style={[
								styles.cardWrapper,
								{
									width: CARD_WIDTH,
									height: CARD_HEIGHT,
									zIndex: 2,
									transform: [{ translateY: -translateY }],
								},
							]}
						>
							<Image
								source={bottomImage}
								style={styles.cardImage}
								resizeMode='contain'
							/>
						</View>
					</View>
				</View>
			</View>
		</Modal>
	);
});

const styles = StyleSheet.create({
	modalRoot: { flex: 1 },
	overlay: {
		...StyleSheet.absoluteFillObject,
		backgroundColor: 'black',
		opacity: 0.5,
	},
	center: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	stackContainer: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	cardWrapper: {
		position: 'absolute',
		borderRadius: 16,
		overflow: 'hidden',
		backgroundColor: '#fff',
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 6 },
		shadowOpacity: 0.22,
		shadowRadius: 12,
		elevation: 10,
	},
	cardImage: { width: '100%', height: '100%' },
});
