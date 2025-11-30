// components/quick-actions-list.tsx
import { List } from '@/components/common/list';
import { IQuickActionItem } from '@/interfaces/quick-actions';
import React from 'react';
import { ListRenderItem, StyleSheet } from 'react-native';

export const QuickActionsList: React.FC<{
	items: readonly IQuickActionItem[];
	renderItem: ListRenderItem<IQuickActionItem>;
}> = ({ items, renderItem }) => {
	return (
		<List<IQuickActionItem>
			header={{ title: 'الوصول السريع' }}
			data={items}
			renderItem={renderItem}
			numColumns={2}
			horizontal={false}
			scrollEnabled={false}
			contentContainerStyle={styles.listContainer}
		/>
	);
};

const styles = StyleSheet.create({
	listContainer: {
		paddingHorizontal: 20,
	},
});
