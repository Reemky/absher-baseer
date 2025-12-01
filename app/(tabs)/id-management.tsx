// app/(tabs)/id-management.tsx
import { BottomSheet } from '@/components/common/bottomsheet';
import { List } from '@/components/common/list';
import { ScreenLayout } from '@/components/common/screen-layout';
import { SeparatorLine } from '@/components/common/separator-line';
import { Text } from '@/components/common/text';
import { Toggle } from '@/components/common/toggle';
import { QuickActionItem } from '@/components/quick-action-item';
import { useIDManagementQuickActions } from '@/hooks/use-id-management-quick-actions';
import { IQuickActionItem } from '@/interfaces/quick-action-item';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { ListRenderItem, StyleSheet, View } from 'react-native';
// import { PermissionsBottomSheet } from '@/components/permissions-bottom-sheet'; // example

export default function IDManagement() {
	const { items, bottomSheetRef, closeBottomSheet } =
		useIDManagementQuickActions();

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
					ref={bottomSheetRef}
					title={'السماح بالوصول'}
					onClose={closeBottomSheet}
				>
					<View style={styles.sheetContainer}>
						<View style={styles.sheetHeader}>
							<Text weight='Bold' style={styles.sheetTitleText}>
								السماح للجهات بالوصول لهويتك الصحية
							</Text>

							<View style={styles.sheetInfoContainer}>
								<Ionicons
									name='information-circle'
									size={20}
									color={'#296FBF'}
								/>

								<Text weight='Medium' style={styles.sheetInfoText}>
									يدعم الجهات المختصة في تعزيز جودة الخدمات من خلال
									الوصول لبياناتك الصحية عند الحاجة.
								</Text>
							</View>
						</View>

						<Toggle
							label='القطاعات الطبية المصرّح لها'
							description='لدعم دراسات الصحة العامة وتحسين جودة الخدمات الوقائية.'
						/>
						<SeparatorLine />

						<Toggle
							label='وزارة الداخلية'
							description='للتحقق من المعلومات الصحية الضرورية لإجراءات الجاهزية والسلامة لبعض المهام الأمنية.'
						/>
						<SeparatorLine />
						<Toggle
							label='الجهات البحثية الوطنية'
							description='لإعداد تقارير وطنية متخصصة عن المؤشرات الصحية السكانية.'
						/>
						<SeparatorLine />

						<Toggle
							label='وزارة التعليم'
							description='للتحقق من المتطلبات الصحية لطلاب البرامج الصحية والتدريب الإكلينيكي.'
						/>
						<SeparatorLine />

						<Toggle
							label='البلديات'
							description='للتحقق من المستندات الصحية المتعلقة بالتراخيص المهنية ونشاطات السلامة الغذائية.'
						/>
					</View>
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
	sheetContainer: {
		alignItems: 'flex-start',
		gap: 14,
	},
	sheetHeader: {
		gap: 8,
	},
	sheetTitleText: {
		textAlign: 'left',
	},
	sheetInfoContainer: {
		flexDirection: 'row',
		gap: 4,
		maxWidth: '80%',
	},
	sheetInfoText: {
		fontSize: 12,
		color: '#7a7a7aff',
		textAlign: 'left',
		bottom: 5,
	},
});
