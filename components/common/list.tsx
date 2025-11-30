import React from 'react';
import {
	FlatList,
	FlatListProps,
	ListRenderItem,
	StyleSheet,
	TouchableOpacity,
	View,
} from 'react-native';
import { Text } from './text';

export const List = <T extends { id: number }>({
	header,
	action,
	data,
	renderItem,
	...rest
}: {
	header?: {
		title: string;
		action?: {
			title: string;
			onPress?: () => void;
		};
	};
	action?: string;
	data: readonly T[];
	renderItem: ListRenderItem<T>;
} & Omit<FlatListProps<T>, 'data' | 'renderItem' | 'keyExtractor'>) => {
	const keyExtractor = (item: T, index: number) => `${item?.id}-${index}`;

	return (
		<View style={styles.container}>
			{header && header?.title && (
				<View style={styles.headerContainer}>
					<Text weight='Bold' style={styles.headerTitle}>
						{header.title}
					</Text>

					{header?.action && (
						<TouchableOpacity
							{...(header.action?.onPress && {
								onPress: header.action.onPress,
							})}
						>
							<Text weight='Medium' style={styles.actionTitle}>
								{header.action?.title}
							</Text>
						</TouchableOpacity>
					)}
				</View>
			)}

			<FlatList<T>
				data={data}
				renderItem={renderItem}
				{...rest}
				keyExtractor={keyExtractor}
				ItemSeparatorComponent={() => (
					<View
						style={
							rest?.horizontal
								? styles.horizontalSeparator
								: styles.verticalSeparator
						}
					/>
				)}
				showsHorizontalScrollIndicator={false}
				showsVerticalScrollIndicator={false}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		alignItems: 'flex-start',
		gap: 12,
	},
	headerContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '100%',
		paddingHorizontal: 20,
	},
	headerTitle: {
		fontSize: 16,
	},
	actionTitle: {
		fontSize: 16,
		color: '#01664F',
	},
	horizontalSeparator: {
		width: 20,
	},
	verticalSeparator: {
		height: 20,
	},
});
