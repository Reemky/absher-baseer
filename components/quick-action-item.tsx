import { Text } from '@/components/common/text';
import { IQuickActionItem } from '@/interfaces/quick-action-item';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

export const QuickActionItem: React.FC<
	Omit<IQuickActionItem, 'route'> & { onPress?: () => void }
> = ({ id, title, icon, onPress = () => {} }) => {
	return (
		<View style={styles.wrapper} key={id}>
			<TouchableOpacity style={styles.card} onPress={onPress}>
				<View style={styles.iconContainer}>{icon}</View>

				<Text weight='Bold' style={styles.title} numberOfLines={2}>
					{title}
				</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	wrapper: {
		width: '49%',
		shadowColor: '#1F1F1F',
		shadowOffset: { width: 0, height: 0 },
		shadowOpacity: 0.1,
		shadowRadius: 3,
		elevation: 3,
	},
	card: {
		alignSelf: 'stretch',
		backgroundColor: '#FFFFFF',
		borderRadius: 16,
		alignItems: 'flex-start',
		justifyContent: 'center',
		paddingHorizontal: 20,
		paddingVertical: 10,
		gap: 6,
		overflow: 'hidden',
		height: 110,
	},
	iconContainer: {
		width: 32,
		height: 32,
		borderRadius: 16,
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		fontSize: 12,
		textAlign: 'left',
	},
});
