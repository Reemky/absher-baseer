// hooks/use-bottomsheet.ts
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { useCallback, useRef } from 'react';

export const useBottomSheet = () => {
	const bottomSheetRef = useRef<BottomSheetModal | null>(null);

	const openBottomSheet = useCallback(() => {
		bottomSheetRef.current?.present();
	}, []);

	const closeBottomSheet = useCallback(() => {
		bottomSheetRef.current?.dismiss();
	}, []);

	return {
		bottomSheetRef,
		openBottomSheet,
		closeBottomSheet,
	};
};
