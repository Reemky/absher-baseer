// components/quick-action-item.tsx
import { Text } from '@/components/common/text';
import { IQuickActionItem } from '@/interfaces/quick-actions';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

export const QuickActionItem: React.FC<
	Omit<IQuickActionItem, 'route'> & { onPress?: () => void }
> = ({ id, title, icon, onPress = () => {} }) => {
	return (
		<View style={styles.wrapper} key={id}>
			<TouchableOpacity style={styles.card} onPress={onPress}>
				<View style={styles.iconContainer}>{icon}</View>

				<Text weight='Bold' style={styles.title}>
					{title}
				</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	wrapper: {
		shadowColor: '#1F1F1F',
		shadowOffset: { width: 0, height: 0 },
		shadowOpacity: 0.01,
		shadowRadius: 3,
		elevation: 3,
	},
	card: {
		width: 160,
		height: 105,
		backgroundColor: '#FFFFFF',
		borderRadius: 16,
		alignItems: 'flex-start',
		justifyContent: 'center',
		paddingHorizontal: 20,
		paddingVertical: 10,
		gap: 6,
		overflow: 'hidden',
	},
	iconContainer: {
		width: 32,
		height: 32,
		borderRadius: 16,
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		fontSize: 14,
	},
});
