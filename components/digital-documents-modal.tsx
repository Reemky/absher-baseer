import {
	DOCUMENT_HEIGHT,
	DOCUMENT_WIDTH,
	MODAL_VERTICAL_GAP,
	MODAL_WIDTH,
} from '@/constants/documents-display-modal';
import React, { useMemo } from 'react';
import {
	Image,
	ImageSourcePropType,
	Modal,
	Pressable,
	StyleSheet,
	View,
} from 'react-native';

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
						{/* Bottom Card (Index 0)  */}
						<View
							style={[
								styles.cardWrapper,
								{
									zIndex: 1,
									transform: [
										{
											translateY:
												DOCUMENT_HEIGHT / 2 + MODAL_VERTICAL_GAP,
										},
									],
								},
							]}
						>
							<Image
								source={bottomImage}
								style={styles.cardImage}
								resizeMode='cover'
							/>
						</View>

						{/* Top Card (Index 1) */}
						<View
							style={[
								styles.cardWrapper,
								{
									zIndex: 2,
									transform: [
										{
											translateY: -(
												DOCUMENT_HEIGHT / 2 +
												MODAL_VERTICAL_GAP
											),
										},
									],
								},
							]}
						>
							<Image
								source={topImage}
								style={styles.cardImage}
								resizeMode='cover'
							/>
						</View>
					</View>
				</View>
			</View>
		</Modal>
	);
});

const styles = StyleSheet.create({
	modalRoot: {
		flex: 1,
	},
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
		height: DOCUMENT_HEIGHT * 2 + MODAL_VERTICAL_GAP * 2,
		width: Math.min(DOCUMENT_WIDTH, MODAL_WIDTH - 48),
		alignItems: 'center',
		justifyContent: 'center',
		position: 'relative',
	},
	cardWrapper: {
		position: 'absolute',
		width: DOCUMENT_WIDTH,
		height: DOCUMENT_HEIGHT,
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
