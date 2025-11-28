import { StyleSheet, Text } from 'react-native';

import { ScreenLayout } from '@/components/screen-layout';

export default function HomeScreen() {
	return (
		<ScreenLayout withGradient>
			<Text style={{ fontSize: 22, fontWeight: '600' }}>
				Welcome princess 💙
			</Text>
		</ScreenLayout>
	);
}

const styles = StyleSheet.create({
	titleContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 8,
	},
	stepContainer: {
		gap: 8,
		marginBottom: 8,
	},
	reactLogo: {
		height: 178,
		width: 290,
		bottom: 0,
		left: 0,
		position: 'absolute',
	},
});
