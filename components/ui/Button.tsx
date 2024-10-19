import { Pressable, StyleSheet, View, ViewStyle } from "react-native";

type Props = {
	children: React.ReactNode;
	onPress: () => void;
	style?: ViewStyle;
	color?: string;
};

const Button: React.FC<Props> = ({ children, onPress, style, color }) => {
	return (
		<Pressable
			style={({ pressed }) => [
				styles.container,
				style,
				color !== undefined && { backgroundColor: color },
				pressed && styles.press,
			]}
			onPress={onPress}
		>
			{children}
		</Pressable>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 8,
		borderRadius: 10,
		backgroundColor: "#f0f0f0",
	},
	press: {
		opacity: 0.7,
	},
});

export default Button;
