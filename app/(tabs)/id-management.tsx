// app/(tabs)/id-management.tsx
import { BottomSheet } from '@/components/common/bottomsheet';
import { List } from '@/components/common/list';
import { ScreenLayout } from '@/components/common/screen-layout';
import IDAccessPermissionSheet from '@/components/id-access-permission-sheet';
import IDIssuanceSheet from '@/components/id-issuance-sheet';
import { QuickActionItem } from '@/components/quick-action-item';
import { useIDManagementQuickActions } from '@/hooks/use-id-management-quick-actions';
import { IQuickActionItem } from '@/interfaces/quick-action-item';
import React from 'react';
import { ListRenderItem, StyleSheet, View } from 'react-native';
// import { PermissionsBottomSheet } from '@/components/permissions-bottom-sheet'; // example

export default function IDManagement() {
	const {
		items,
		accessBottomSheetRef,
		issuanceBottomSheetRef,
		closeAccessBottomSheet,
		closeIssuanceBottomSheet,
	} = useIDManagementQuickActions();

	const renderQuickActionItem: ListRenderItem<IQuickActionItem> = ({
		item,
	}) => {
		const onPress = () => {
			item?.onPress();
		};

		return (
			<QuickActionItem
				id={item?.id}
				title={item?.title}
				icon={item?.icon}
				onPress={onPress}
			/>
		);
	};

	return (
		<ScreenLayout title='إدارة الهوية الصحية' hasBackButton>
			<View style={styles.container}>
				<List<IQuickActionItem>
					data={items}
					renderItem={renderQuickActionItem}
					numColumns={2}
					scrollEnabled={false}
					contentContainerStyle={styles.quickActionsListContainer}
					columnWrapperStyle={styles.quickActionsColumnWrapperStyle}
				/>

				<BottomSheet
					ref={accessBottomSheetRef}
					title={'السماح بالوصول'}
					onClose={closeAccessBottomSheet}
				>
					<IDAccessPermissionSheet />
				</BottomSheet>

				<BottomSheet
					ref={issuanceBottomSheetRef}
					title={'خدمات إصدار وتجديد الهوية الصحية'}
					onClose={closeIssuanceBottomSheet}
				>
					<IDIssuanceSheet />
				</BottomSheet>
			</View>
		</ScreenLayout>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	quickActionsContent: {
		alignItems: 'flex-start',
	},
	quickActionsListContainer: {
		paddingHorizontal: 20,
	},
	quickActionsColumnWrapperStyle: {
		justifyContent: 'space-between',
	},
});
