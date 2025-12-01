import { SplashScreen, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import { useAppFonts } from '@/hooks/use-app-fonts';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export const unstable_settings = {
	anchor: '(tabs)',
};

export default function RootLayout() {
	const [fontsLoaded, fontError] = useAppFonts();

	useEffect(() => {
		if (fontsLoaded || fontError) {
			SplashScreen.hideAsync();
		}
	}, [fontsLoaded, fontError]);

	if (!fontsLoaded && !fontError) {
		return null;
	}

	return (
		<GestureHandlerRootView>
			<BottomSheetModalProvider>
				<Stack
					screenOptions={{
						headerShown: false,
					}}
				>
					<Stack.Screen name='(tabs)' />
				</Stack>
				<StatusBar style='auto' />
			</BottomSheetModalProvider>
		</GestureHandlerRootView>
	);
}
