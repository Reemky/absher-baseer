import { FONT_ASSETS } from '@/constants/font-assets';
import { useFonts } from 'expo-font';

/**
 * Custom hook to load all application fonts.
 * @returns [fontsLoaded: boolean, fontError: Error | null]
 */
export function useAppFonts() {
	const [fontsLoaded, fontError] = useFonts(FONT_ASSETS);

	return [fontsLoaded, fontError];
}
