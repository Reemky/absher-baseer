import React, { useCallback, useState } from 'react';
import { StyleSheet, Switch, SwitchProps, View } from 'react-native';
import { Text } from './text';

/**
 * Pure UI toggle
 */
export const Toggle: React.FC<
	{
		label?: string;
		description?: string;
		disabled?: boolean;
	} & Omit<SwitchProps, 'value' | 'onValueChange'>
> = React.memo(({ label, description, disabled, ...switchProps }) => {
	const [isOn, setIsOn] = useState(false);

	const onValueChange = useCallback(() => {
		if (disabled) return;
		setIsOn((prev) => !prev);
	}, [disabled]);

	const switchElement = (
		<Switch
			{...switchProps}
			value={isOn}
			onValueChange={onValueChange}
			disabled={disabled}
		/>
	);

	if (!label) {
		return switchElement;
	}

	return (
		<View style={styles.container}>
			<View style={styles.textContent}>
				<Text weight='Bold' style={styles.label}>
					{label}
				</Text>

				<Text weight='Medium' style={styles.description}>
					{description}
				</Text>
			</View>

			<View style={styles.switchWrapper}>{switchElement}</View>
		</View>
	);
});

Toggle.displayName = 'Toggle';

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'flex-start',
		justifyContent: 'space-between',
		width: '100%',
	},
	textContent: {
		maxWidth: '80%',
		gap: 0,
	},
	switchWrapper: {
		minWidth: '10%',
		alignSelf: 'flex-start',
	},
	label: {
		textAlign: 'left',
	},
	description: {
		fontSize: 12,
		textAlign: 'left',
		color: '#7a7a7aff',
	},
});
