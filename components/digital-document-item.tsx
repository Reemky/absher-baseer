import { ABText } from '@/components/common/text'; // Assuming ABText path
import { IDigitalDocumentItem } from '@/interfaces/digital-documents';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';

export const DigitalDocumentItem: React.FC<IDigitalDocumentItem> = ({
	id,
	title,
	colors,
	onPress = () => {},
}) => {
	return (
		<TouchableOpacity
			style={styles.container}
			key={`${id}`}
			onPress={onPress}
		>
			<View style={styles.content}>
				<LinearGradient
					colors={colors?.background}
					start={{ x: 0.7, y: 0.7 }}
					end={{ x: 0, y: 0 }}
					style={StyleSheet.absoluteFill}
					pointerEvents='none'
				/>
				<Image
					source={require('../assets/icons/ministry-of-interior-logo.png')}
					style={[styles.bottomLeftImage, { tintColor: colors?.logoTint }]}
					resizeMode='contain'
				/>

				<ABText weight='Bold'>{title}</ABText>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		shadowColor: '#1F1F1F',
		shadowOffset: { width: 0, height: 0 },
		shadowOpacity: 0.01,
		shadowRadius: 3,
		elevation: 3,
	},
	content: {
		alignItems: 'flex-start',
		paddingHorizontal: 10,
		paddingTop: 5,
		height: 100,
		width: 155,
		borderRadius: 16,
		overflow: 'hidden',
	},
	bottomLeftImage: {
		position: 'absolute',
		width: 120,
		height: 120,
		top: 30, // Adjust this value to move it further down
		left: 48, // Adjust this value to move it further left
		opacity: 0.3,
	},
});
