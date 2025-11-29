import { PropsWithChildren } from 'react';
import { Text as RNText, TextProps } from 'react-native';

type TFontWeight = 'Light' | 'Regular' | 'Medium' | 'SemiBold' | 'Bold';

interface IABTextProps extends TextProps {
	weight?: TFontWeight;
}

export const ABText = ({
	children,
	style: propsStyle,
	weight = 'Medium',
	...props
}: PropsWithChildren<IABTextProps>): React.JSX.Element => {
	return (
		<RNText
			{...props}
			style={[{ color: '#1F1F1F' }, propsStyle, { fontFamily: weight }]}
		>
			{children}
		</RNText>
	);
};
