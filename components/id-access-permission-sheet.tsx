import { SeparatorLine } from '@/components/common/separator-line';
import { Text } from '@/components/common/text';
import { Toggle } from '@/components/common/toggle';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function IDAccessPermissionSheet() {
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text weight='Bold' style={styles.titleText}>
					السماح للجهات بالوصول لهويتك الصحية
				</Text>

				<View style={styles.infoContainer}>
					<Ionicons
						name='information-circle'
						size={20}
						color={'#296FBF'}
					/>

					<Text weight='Medium' style={styles.infoText}>
						يدعم الجهات المختصة في تعزيز جودة الخدمات من خلال الوصول
						لبياناتك الصحية عند الحاجة.
					</Text>
				</View>
			</View>

			<Toggle
				label='القطاعات الطبية المصرّح لها'
				description='لدعم دراسات الصحة العامة وتحسين جودة الخدمات الوقائية.'
			/>
			<SeparatorLine />

			<Toggle
				label='وزارة الداخلية'
				description='للتحقق من المعلومات الصحية الضرورية لإجراءات الجاهزية والسلامة لبعض المهام الأمنية.'
			/>
			<SeparatorLine />
			<Toggle
				label='الجهات البحثية الوطنية'
				description='لإعداد تقارير وطنية متخصصة عن المؤشرات الصحية السكانية.'
			/>
			<SeparatorLine />

			<Toggle
				label='وزارة التعليم'
				description='للتحقق من المتطلبات الصحية لطلاب البرامج الصحية والتدريب الإكلينيكي.'
			/>
			<SeparatorLine />

			<Toggle
				label='البلديات'
				description='للتحقق من المستندات الصحية المتعلقة بالتراخيص المهنية ونشاطات السلامة الغذائية.'
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'flex-start',
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
		bottom: 5,
	},
});
