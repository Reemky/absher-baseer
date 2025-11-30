import { List } from '@/components/common/list';
import { ScreenLayout } from '@/components/common/screen-layout';
import { DigitalDocumentItem } from '@/components/digital-document-item';
import { DigitalDocumentsModal } from '@/components/digital-documents-modal';
import { QuickActionItem } from '@/components/quick-action-item';
import { QuickActionsList } from '@/components/quick-actions-list';
import { UserCard } from '@/components/user-card';
import { DIGITAL_DOCUMENTS_ITEMS } from '@/constants/digital-documents';
import { QUICK_ACTIONS_ITEMS } from '@/constants/quick-actions';
import { IDigitalDocumentItem } from '@/interfaces/digital-documents';
import { IQuickActionItem } from '@/interfaces/quick-actions';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
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

	const renderDigitalDocumentItem: ListRenderItem<IDigitalDocumentItem> = ({
		item,
	}) => {
		const onPressItem = () => openDigitalDocumentsModal(item);

		return <DigitalDocumentItem {...item} onPress={onPressItem} />;
	};

	const onCloseModal = () => setIsModalVisible(false);

	const renderQuickActionItem: ListRenderItem<IQuickActionItem> = ({
		item,
	}) => {
		const onPress = () => {
			if (!item.route) return;
			router.push(item.route);
		};

		return (
			<QuickActionItem
				id={item.id}
				title={item.title}
				icon={item.icon}
				onPress={onPress}
			/>
		);
	};

	return (
		<ScreenLayout withGradient>
			<>
				<View style={styles.container}>
					<View style={styles.layoutPaddingHorizontal}>
						<UserCard />
					</View>

					<List
						header={{
							title: 'وثائقي الرقمية',
							action: {
								title: 'عرض الكل',
							},
						}}
						data={DIGITAL_DOCUMENTS_ITEMS}
						renderItem={renderDigitalDocumentItem}
						contentContainerStyle={styles.layoutPaddingHorizontal}
						horizontal
					/>

					<View style={styles.actionsContainer}>
						<LinearGradient
							colors={['#EAF7EE', '#EAF7EE', '#F9F9F9']}
							locations={[0, 1, 1]}
							start={{ x: 0, y: 0 }}
							end={{ x: 0, y: 1 }}
							style={StyleSheet.absoluteFill}
							pointerEvents='none'
						/>

						<View style={styles.actionsContent}>
							<QuickActionsList
								items={QUICK_ACTIONS_ITEMS}
								renderItem={renderQuickActionItem}
							/>
						</View>
					</View>
				</View>
			</>

			<DigitalDocumentsModal
				visible={isModalVisible}
				images={modalImages}
				onClose={onCloseModal}
			/>
		</ScreenLayout>
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
		justifyContent: 'flex-start',
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
	actionsContainer: {
		flex: 1,
		marginTop: 20,
		paddingTop: 15,
		// paddingHorizontal: 20,
	},
	actionsContent: {
		alignItems: 'flex-start',
	},
	actionsHeaderTitle: {
		fontSize: 16,
	},
});
