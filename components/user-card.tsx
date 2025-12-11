import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Text } from './common/text';

export const UserCard = () => {
	return (
		<View style={styles.container}>
			<View style={styles.content}>
				<View style={styles.infoContainer}>
					<Image
						source={require('../assets/images/user-image.png')}
						style={{ width: 60, height: 60 }}
						resizeMode='contain'
					/>

					<View style={styles.infoText}>
						<Text weight='Bold' style={styles.name}>
							مهند عبدالرحمن محمد آل ظاهر
						</Text>
						<Text weight='Regular' style={styles.nationalID}>
							رقم الهوية: 1010101010
						</Text>
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
