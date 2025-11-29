import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ABText } from './common/text';

export const ABUserCard = () => {
	return (
		<View style={styles.container}>
			<View style={styles.content}>
				<View style={styles.infoContainer}>
					<Image
						source={require('../assets/images/user-profile-icon.png')}
						style={{ width: 50, height: 50 }}
						resizeMode='contain'
					/>

					<View style={styles.infoText}>
						<ABText weight='Bold' style={styles.name}>
							مهند عبدالرحمن محمد آل ظاهر
						</ABText>
						<ABText weight='Regular' style={styles.nationalID}>
							رقم الهوية: 1234567890
						</ABText>
					</View>
				</View>

				<TouchableOpacity>
					<Ionicons name='chevron-back' size={22} color={'#b5b5b5ff'} />
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#FFFFFF',
		alignItems: 'flex-start',
		borderRadius: 16,
		width: '100%',
		height: 'auto',
		padding: 20,
		shadowColor: '#1F1F1F',
		shadowOffset: { width: 0, height: 0 },
		shadowOpacity: 0.1,
		shadowRadius: 5,
	},
	content: {
		alignItems: 'center',
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	infoContainer: {
		alignItems: 'center',
		flexDirection: 'row',
		gap: 16,
	},
	infoText: {
		alignItems: 'flex-start',
		justifyContent: 'space-between',
	},
	name: {
		fontSize: 16,
	},
	nationalID: {
		fontSize: 13,
		color: '#4E4F51',
	},
});
