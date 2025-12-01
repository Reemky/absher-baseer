import { List } from '@/components/common/list';
import { ScreenLayout } from '@/components/common/screen-layout';
import { DigitalDocumentItem } from '@/components/digital-document-item';
import { DigitalDocumentsModal } from '@/components/digital-documents-modal';
import { QuickActionItem } from '@/components/quick-action-item';
import { UserCard } from '@/components/user-card';
import { DIGITAL_DOCUMENTS_ITEMS } from '@/constants/digital-documents';
import { useHomeQuickActions } from '@/hooks/use-home-quick-actions';
import { IDigitalDocumentItem } from '@/interfaces/digital-document-item';
import { IQuickActionItem } from '@/interfaces/quick-action-item';
import { LinearGradient } from 'expo-linear-gradient';
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
	const { items: QUICK_ACTIONS_ITEMS } = useHomeQuickActions();

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
		<ScreenLayout withGradient showDefaultIcons>
			<>
				<View style={styles.container}>
					<View style={styles.layoutPaddingHorizontal}>
						<UserCard />
					</View>

					<List<IDigitalDocumentItem>
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

					<View style={styles.quickActionsContainer}>
						<LinearGradient
							colors={['#EAF7EE', '#EAF7EE', '#251010ff']}
							locations={[0, 1, 1]}
							start={{ x: 0, y: 0 }}
							end={{ x: 0, y: 1 }}
							style={StyleSheet.absoluteFill}
							pointerEvents='none'
						/>

						<View style={styles.quickActionsContent}>
							<List<IQuickActionItem>
								header={{
									title: 'الوصول السريع',
								}}
								data={QUICK_ACTIONS_ITEMS}
								renderItem={renderQuickActionItem}
								numColumns={2}
								scrollEnabled={false}
								contentContainerStyle={styles.quickActionsListContainer}
								columnWrapperStyle={
									styles.quickActionsColumnWrapperStyle
								}
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
	headerLeftContent: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	quickActionsContainer: {
		flex: 1,
		marginTop: 20,
		paddingTop: 15,
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
