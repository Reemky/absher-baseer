// hooks/use-id-management-quick-actions.ts

import { IQuickActionItem } from '@/interfaces/quick-action-item';
import { AntDesign, Feather } from '@expo/vector-icons';
import { useMemo } from 'react';
import { useBottomSheet } from './use-bottomsheet';

export const useIDManagementQuickActions = () => {
	const { bottomSheetRef, openBottomSheet, closeBottomSheet } =
		useBottomSheet();

	const items = useMemo<IQuickActionItem[]>(
		() => [
			{
				id: 1,

				title: 'إدارة الأذونات وصلاحيات الوصول',
				icon: <Feather name='map' size={25} color='#01664F' />,
				onPress: () => openBottomSheet(),
			},
			{
				id: 2,
				title: 'إصدار أو تجديد الهوية الصحية',
				icon: <AntDesign name='idcard' size={28} color='#01664F' />,
				onPress: () => {}, // non-functional
			},
		],
		[openBottomSheet]
	);

	return {
		items,
		bottomSheetRef,
		closeBottomSheet,
	};
};
