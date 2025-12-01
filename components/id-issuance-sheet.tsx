// IDIssuanceSheet.tsx
import { RadioList } from '@/components/common/radio-list';
import { Text } from '@/components/common/text';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

export default function IDIssuanceSheet() {
	return (
		<View style={styles.container}>
			<View style={styles.content}>
				<View style={styles.header}>
					<Text weight='Bold' style={styles.titleText}>
						خدمات إصدار وتجديد الهوية الصحية
					</Text>

					<View style={styles.infoContainer}>
						<Ionicons
							name='information-circle'
							size={20}
							color={'#296FBF'}
						/>

						<Text weight='Medium' style={styles.infoText}>
							تُمكّن المستفيد من اختيار الإجراء المطلوب على هويته الصحية؛
							إصدار، تجديد، أو بدل فاقد.
						</Text>
					</View>
				</View>

				<RadioList
					items={[
						{
							id: 1,
							label: 'إصدار هوية صحية جديدة',
							description:
								'لإصدار هوية صحية للمرة الأولى وفق المتطلبات النظامية.',
						},
						{
							id: 2,
							label: 'تجديد الهوية الصحية',
							description:
								'لتحديث بيانات الهوية الصحية وتمديد صلاحيتها.',
						},
						{
							id: 3,
							label: 'طلب بدل فاقد للهوية الصحية',
							description:
								'لتقديم طلب إصدار وثيقة بديلة في حال فقدان الهوية الصحية.',
						},
					]}
				/>
			</View>

			<View style={styles.footer}>
				<TouchableOpacity style={styles.button} activeOpacity={0.7}>
					<Text weight='Bold' style={styles.buttonText}>
						متابعة
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	// 👑 this should now cover the WHOLE sheet area
	container: {
		flex: 1,
		justifyContent: 'space-between',
		minHeight: '100%',
	},
	content: {
		paddingTop: 16,
		gap: 14,
	},
	header: {
		gap: 8,
	},
	titleText: {
		textAlign: 'left',
	},
	infoContainer: {
		flexDirection: 'row',
		gap: 4,
		maxWidth: '80%',
	},
	infoText: {
		fontSize: 12,
		color: '#7a7a7aff',
		textAlign: 'left',
		bottom: 3,
	},
	footer: {
		paddingTop: 12,
	},
	button: {
		width: '100%',
		backgroundColor: '#01664F',
		paddingVertical: 10,
		borderRadius: 12,
		alignItems: 'center',
		justifyContent: 'center',
	},
	buttonText: {
		color: '#FFFFFF',
		fontSize: 16,
	},
});
