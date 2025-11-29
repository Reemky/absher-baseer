import Ionicons from '@expo/vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';
import { PropsWithChildren } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const ABScreenLayout = ({
	withGradient = false,
	children,
}: PropsWithChildren<{ withGradient?: boolean }>): React.JSX.Element => {
	const { top: safeAreaPaddingTop } = useSafeAreaInsets();

	return (
		<View style={[styles.container, { paddingTop: safeAreaPaddingTop }]}>
			{withGradient && (
				<LinearGradient
					colors={['#EAF7EE', '#EAF7EE', '#F9F9F9', '#F9F9F9']}
					locations={[0, 0.25, 0.26, 1]}
					start={{ x: 0, y: 0 }}
					end={{ x: 0, y: 1 }}
					style={StyleSheet.absoluteFill}
					pointerEvents='none'
				/>
			)}

			<View style={styles.headerContainer}>
				{/* Logos */}
				<View style={styles.logosContainer}>
					<Image
						source={require('../../assets/icons/ministry-of-interior-logo.png')}
						style={{ width: 40, height: 40 }}
						resizeMode='contain'
					/>

					<Image
						source={require('../../assets/icons/absher-logo.png')}
						style={{ width: 60, height: 60 }}
						resizeMode='contain'
					/>
				</View>

				{/* Settings & Notifications */}
				<View style={styles.iconsContainer}>
					<TouchableOpacity>
						<Ionicons name='settings-outline' size={28} color='#1E6A4C' />
					</TouchableOpacity>

					<TouchableOpacity>
						<Ionicons
							name='notifications-outline'
							size={28}
							color='#1E6A4C'
						/>
					</TouchableOpacity>
				</View>
			</View>

			{/* Content */}

			<View style={styles.children}>{children}</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	headerContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingHorizontal: 20,
		paddingBottom: 16,
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
	children: {
		flex: 1,
	},
});
