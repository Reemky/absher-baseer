import { Text } from '@/components/common/text';
import Ionicons from '@expo/vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { PropsWithChildren } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
// components/ScreenLayout.tsx

export const ScreenLayout = ({
	title = '',
	showDefaultIcons = false,
	hasBackButton = false,
	withGradient = false,
	children,
}: PropsWithChildren<{
	title?: string;
	showDefaultIcons?: boolean;
	withGradient?: boolean;
	hasBackButton?: boolean;
}>): React.JSX.Element => {
	const { top: safeAreaPaddingTop } = useSafeAreaInsets();
	const handleBackPress = () => router.back();

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
				{/* 1. LEFT SIDE: Back Button OR Logos */}
				<View
					style={[styles.controlArea, { justifyContent: 'flex-start' }]}
				>
					{hasBackButton ? (
						<TouchableOpacity
							onPress={handleBackPress}
							style={styles.backButtonContainer}
						>
							<Ionicons
								name='chevron-forward-outline'
								size={30}
								color='#01664F'
							/>
							<Text
								weight='Medium'
								style={styles.backButtonText}
								numberOfLines={1}
							>
								الرجوع
							</Text>
						</TouchableOpacity>
					) : showDefaultIcons ? (
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
					) : (
						<View style={styles.controlArea} />
					)}
				</View>

				{title ? (
					<View style={styles.titleContainer}>
						<Text
							weight='Bold'
							style={styles.titleText}
							numberOfLines={1}
						>
							{title}
						</Text>
					</View>
				) : null}

				{/* 3. RIGHT SIDE: Icons Area */}
				{showDefaultIcons ? (
					<View
						style={[styles.controlArea, { justifyContent: 'flex-end' }]}
					>
						<View style={styles.iconsContainer}>
							<TouchableOpacity>
								<Ionicons
									name='settings-outline'
									size={28}
									color='#01664F'
								/>
							</TouchableOpacity>
							<TouchableOpacity>
								<Ionicons
									name='notifications-outline'
									size={28}
									color='#01664F'
								/>
							</TouchableOpacity>
						</View>
					</View>
				) : (
					<View style={styles.controlArea} />
				)}
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
		paddingHorizontal: 20,
		paddingBottom: 16,
	},
	// This container ensures left and right controls take equal flexible space.
	controlArea: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
	},
	titleContainer: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	titleText: {
		fontSize: 16,
	},
	iconsContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 20,
	},
	logosContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 5,
	},
	backButtonContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	backButtonText: {
		fontSize: 16,
		color: '#01664F',
	},
	children: {
		flex: 1,
	},
});
