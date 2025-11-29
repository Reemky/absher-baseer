import { ABList } from '@/components/common/list';
import { ABScreenLayout } from '@/components/common/screen-layout';
import { DigitalDocumentItem } from '@/components/digital-document-item';
import { DigitalDocumentsModal } from '@/components/digital-documents-modal';
import { ABUserCard } from '@/components/user-card';
import { DIGITAL_DOCUMENTS_ITEMS } from '@/constants/digital-documents';
import { IDigitalDocumentItem } from '@/interfaces/digital-documents';
import { useCallback, useState } from 'react';
import {
	ImageSourcePropType,
	ListRenderItem,
	StyleSheet,
	View,
} from 'react-native';

export default function HomeScreen() {
	const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
	const [modalImages, setModalImages] = useState<ImageSourcePropType[]>([]);

	const openDigitalDocumentsModal = useCallback(
		(item: IDigitalDocumentItem) => {
			const { images } = item;
			setModalImages(images ?? []);
			setIsModalVisible(true);
		},
		[]
	);

	const renderItem: ListRenderItem<IDigitalDocumentItem> = ({ item }) => {
		const onPressItem = () => openDigitalDocumentsModal(item);

		return <DigitalDocumentItem {...item} onPress={onPressItem} />;
	};

	const onCloseModal = () => setIsModalVisible(false);
	return (
		<ABScreenLayout withGradient>
			<View style={styles.container}>
				<View style={styles.layoutPaddingHorizontal}>
					<ABUserCard />
				</View>

				<ABList
					header={{
						title: 'وثائقي الرقمية',
						action: {
							title: 'عرض الكل',
						},
					}}
					data={DIGITAL_DOCUMENTS_ITEMS}
					renderItem={renderItem}
					contentContainerStyle={styles.layoutPaddingHorizontal}
					horizontal
				/>
			</View>
			<DigitalDocumentsModal
				visible={isModalVisible}
				images={modalImages}
				onClose={onCloseModal}
			/>
		</ABScreenLayout>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		gap: 25,
	},
	layoutPaddingHorizontal: {
		paddingHorizontal: 20,
	},
	itemContainer: {
		backgroundColor: 'red',
		alignItems: 'flex-start',
		paddingHorizontal: 15,
		paddingTop: 10,
		height: 105,
		width: 155,
		borderRadius: 16,
		overflow: 'hidden',
		shadowColor: '#000000ff',
		shadowOffset: { width: 0, height: 0 },
		shadowOpacity: 0.1,
		shadowRadius: 5,
	},
});
