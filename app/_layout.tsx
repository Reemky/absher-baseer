import { SplashScreen, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useAppFonts } from '@/hooks/use-app-fonts';
import { useEffect } from 'react';

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
		<>
			<Stack>
				<Stack.Screen name='(tabs)' options={{ headerShown: false }} />
			</Stack>
			<StatusBar style='auto' />
		</>
	);
}
