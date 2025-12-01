import React, { useCallback, useState } from 'react';
import {
	ListRenderItem,
	StyleSheet,
	TouchableOpacity,
	View,
} from 'react-native';

import { List } from './list';
import { SeparatorLine } from './separator-line';
import { Text } from './text';

const RADIO_SIZE = 18;
const RADIO_BORDER_WIDTH = 1.5;

export const RadioList: React.FC<{
	items: readonly {
		id: number;
		label: string;
		description?: string;
		disabled?: boolean;
	}[];
}> = React.memo(({ items }) => {
	const [selectedId, setSelectedId] = useState<number | null>(null);

	const handlePress = useCallback((id: number, disabled?: boolean) => {
		if (disabled) return;
		setSelectedId(id);
	}, []);

	const renderItem: ListRenderItem<{
		id: number;
		label: string;
		description?: string;
		disabled?: boolean;
	}> = useCallback(
		({ item, index }) => {
			const isSelected = item?.id === selectedId;
			const isLastItem = items?.length - 1 === index;
			const onPress = () => handlePress(item?.id, item?.disabled);

			return (
				<View style={styles.column}>
					<TouchableOpacity
						onPress={onPress}
						disabled={item?.disabled}
						style={styles.row}
						activeOpacity={0.5}
					>
						<View style={styles.textContent}>
							<Text weight='Bold' style={styles.label}>
								{item?.label}
							</Text>

							{!!item?.description && (
								<Text weight='Medium' style={styles.description}>
									{item?.description}
								</Text>
							)}
						</View>

						<View style={styles.radioWrapper}>
							<View
								style={[
									styles.radioOuter,
									isSelected && styles.radioOuterSelected,
									item?.disabled && styles.radioOuterDisabled,
								]}
							>
								{isSelected && <View style={styles.radioInner} />}
							</View>
						</View>
					</TouchableOpacity>

					{!isLastItem && <SeparatorLine />}
				</View>
			);
		},
		[selectedId]
	);

	return (
		<View style={styles.listContainer}>
			<List<{
				id: number;
				label: string;
				description?: string;
				disabled?: boolean;
			}>
				data={items}
				renderItem={renderItem}
				scrollEnabled={false}
				contentContainerStyle={styles.flatListContent}
				extraData={selectedId}
			/>
		</View>
	);
});

RadioList.displayName = 'RadioList';

const styles = StyleSheet.create({
	listContainer: {
		width: '100%',
	},
	flatListContent: {
		width: '100%',
	},
	column: {
		gap: 14,
	},
	row: {
		flexDirection: 'row',
		alignItems: 'flex-start',
		justifyContent: 'space-between',
		width: '100%',
	},
	textContent: {
		maxWidth: '80%',
		marginTop: -2,
	},
	radioWrapper: {
		minWidth: '10%',
		alignItems: 'flex-end',
		alignSelf: 'flex-start',
	},
	label: {
		textAlign: 'left',
		bottom: 5,
	},
	description: {
		fontSize: 12,
		textAlign: 'left',
		bottom: 5,
		color: '#7a7a7aff',
	},
	radioOuter: {
		width: RADIO_SIZE,
		height: RADIO_SIZE,
		borderRadius: RADIO_SIZE / 2,
		borderWidth: RADIO_BORDER_WIDTH,
		borderColor: '#B3B3B3',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#FFFFFF',
	},
	radioOuterSelected: {
		borderColor: '#01664F',
	},
	radioOuterDisabled: {
		opacity: 0.5,
	},
	radioInner: {
		width: RADIO_SIZE / 2,
		height: RADIO_SIZE / 2,
		borderRadius: RADIO_SIZE / 4,
		backgroundColor: '#01664F',
	},
});
