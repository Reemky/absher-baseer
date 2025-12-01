import React from 'react';
import { StyleSheet, View } from 'react-native';

/**
 * Pure UI separator line
 */
export const SeparatorLine = (): React.JSX.Element => {
	return <View style={styles.line} />;
};

const styles = StyleSheet.create({
	line: {
		height: StyleSheet.hairlineWidth,
		backgroundColor: '#b5b5b5ff',
		alignSelf: 'stretch',
	},
});
