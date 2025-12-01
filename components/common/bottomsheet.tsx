import { Text } from '@/components/common/text';
import {
	BottomSheetBackdrop,
	BottomSheetBackdropProps,
	BottomSheetModal,
	BottomSheetView,
} from '@gorhom/bottom-sheet';
import React, { useCallback } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const BottomSheet = React.forwardRef<
	BottomSheetModal,
	{ children: React.ReactNode; onClose: () => void; title?: string }
>(({ children, onClose, title = '' }, ref) => {
	const { bottom: safeAreaPaddingBottom } = useSafeAreaInsets();

	const renderBackdrop = useCallback(
		(backdropProps: BottomSheetBackdropProps) => (
			<BottomSheetBackdrop
				{...backdropProps}
				appearsOnIndex={0}
				disappearsOnIndex={-1}
				pressBehavior='close'
			/>
		),
		[]
	);

	return (
		<BottomSheetModal
			ref={ref}
			index={0}
			snapPoints={['90%']}
			onDismiss={onClose}
			enablePanDownToClose
			enableDynamicSizing={false}
			backdropComponent={renderBackdrop}
			handleComponent={() => null} // to remove top indicator
		>
			<BottomSheetView style={styles.sheetContainer}>
				<View style={styles.headerContainer}>
					<View style={styles.leftSpacer} />

					<View style={styles.titleContainer}>
						<Text
							weight='Bold'
							style={styles.titleText}
							numberOfLines={1}
						>
							{title}
						</Text>
					</View>

					<TouchableOpacity onPress={onClose} style={styles.cancelButton}>
						<Text weight='Regular' style={styles.cancelText}>
							إلغاء
						</Text>
					</TouchableOpacity>
				</View>

				<View
					style={[
						styles.content,
						{ paddingBottom: safeAreaPaddingBottom },
					]}
				>
					{children}
				</View>
			</BottomSheetView>
		</BottomSheetModal>
	);
});

BottomSheet.displayName = 'BottomSheet';

const styles = StyleSheet.create({
	modalContent: {
		flex: 1,
	},
	sheetContainer: {
		flex: 1,
	},
	headerContainer: {
		padding: 20,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	leftSpacer: {
		minWidth: 50,
	},
	titleContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	titleText: {
		fontSize: 18,
		textAlign: 'center',
	},
	cancelButton: {
		minWidth: 50,
	},
	cancelText: {
		fontSize: 18,
		color: '#01664F',
	},
	content: {
		paddingHorizontal: 20,
		minHeight: '90%',
	},
});
