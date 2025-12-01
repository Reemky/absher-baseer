import { IQuickActionItem } from '@/interfaces/quick-action-item';
import { Feather, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useMemo } from 'react';

export const useHomeQuickActions = () => {
	const router = useRouter();

	const items = useMemo<IQuickActionItem[]>(
		() => [
			{
				id: 1,
				title: 'إدارة الهوية الصحية',
				icon: <Ionicons name='id-card' size={24} color='#01664F' />,
				onPress: () => router.navigate('/id-management'),
			},
			{
				id: 2,
				title: 'أبشر سفر',
				icon: <Feather name='map' size={25} color='#01664F' />,
				onPress: () => {
					// non-functional
				},
			},
			{
				id: 3,
				title: 'خدمات التوثق',
				icon: (
					<MaterialIcons name='fingerprint' size={35} color='#01664F' />
				),
				onPress: () => {
					// non-functional
				},
			},
			{
				id: 3,
				title: 'المخالفات المرورية',
				icon: (
					<Ionicons name='newspaper-outline' size={29} color='#01664F' />
				),
				onPress: () => {
					// non-functional
				},
			},
		],
		[]
	);

	return { items };
};
