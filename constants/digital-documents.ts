import { IDigitalDocumentItem } from '@/interfaces/digital-documents';

export const DIGITAL_DOCUMENTS_ITEMS: IDigitalDocumentItem[] = [
	{
		id: 1,
		title: 'هوية صحية (بَصير)',
		colors: { background: ['#fff99eff', '#fffef3ff'], logoTint: '#cbc025ff' },
		images: [
			require('@/assets/images/medical-id-front.png'),
			require('@/assets/images/medical-id-back.png'),
		],
	},
	{
		id: 2,
		title: 'هوية مواطن',
		colors: { background: ['#C3FAD3', '#EAFEF5'], logoTint: '#08bf76ff' },
	},
	{
		id: 3,
		title: 'جواز السفر',
		colors: { background: ['#DAD3F1', '#F6F5FD'], logoTint: '#a288faff' },
	},
	{
		id: 4,
		title: 'رخصة سياقة',
		colors: { background: ['#7bdaffff', '#d4f1ffff'], logoTint: '#29b2e8ff' },
	},
];
