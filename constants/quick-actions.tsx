import { IQuickActionItem } from '@/interfaces/quick-actions';
import { Feather, Ionicons } from '@expo/vector-icons';

export const QUICK_ACTIONS_ITEMS: IQuickActionItem[] = [
	{
		id: 1,
		title: 'إدارة الهوية الصحية',
		icon: <Ionicons name='flash' size={22} color='#01664F' />,
		route: '/other-services',
	},
	{
		id: 2,
		title: 'أبشر سفر',
		icon: <Feather name='map' size={25} color='#01664F' />,
	},
	{
		id: 3,
		title: 'عنصر ٣',
		icon: <Ionicons name='document' size={20} color='#01664F' />,
	},
];
