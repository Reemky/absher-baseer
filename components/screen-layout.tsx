import Ionicons from '@expo/vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';
import { PropsWithChildren } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export function ScreenLayout({
	withGradient = false,
	children,
}: PropsWithChildren<{ withGradient?: boolean }>) {
	return (
		<SafeAreaView style={styles.container}>
			{withGradient && (
				<LinearGradient
					colors={['#EAF7EE', '#EAF7EE', '#F9F9F9', '#F9F9F9']}
					locations={[0, 0.25, 0.26]}
					start={{ x: 0, y: 0 }}
					end={{ x: 0, y: 1 }}
					style={StyleSheet.absoluteFill}
					pointerEvents='none'
				/>
			)}
			<View style={styles.headerContainer}>
				{/* Left (Settings & Notifications) */}
				<TouchableOpacity style={styles.iconsContainer} onPress={() => {}}>
					<Ionicons
						name='notifications-outline'
						size={28}
						color='#1E6A4C'
					/>
					<Ionicons name='settings-outline' size={28} color='#1E6A4C' />
				</TouchableOpacity>

				{/* Right (logos) */}
				<View style={styles.logosContainer}>
					<Image
						source={require('../assets/icons/absher-logo.png')}
						style={{ width: 60, height: 60 }}
						resizeMode='contain'
					/>
					<Image
						source={require('../assets/icons/ministry-of-interior-logo.png')}
						style={{ width: 40, height: 40 }}
						resizeMode='contain'
					/>
				</View>
			</View>

			{/* Content */}
			
			<View style={styles.body}>{children}</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 16,
		paddingBottom: 16,
	},
	headerContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingHorizontal: 8,
		marginBottom: 16,
	},
	iconsContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 20,
	},
	logosContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	body: {
		flex: 1,
	},
});
