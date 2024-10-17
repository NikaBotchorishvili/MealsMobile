import React from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

// Define the HOC with a generic that ensures navigation props are passed correctly
const withCenteredContainer = <P extends NativeStackScreenProps<any>>(
	WrappedComponent: React.ComponentType<P>
) => {
	const ComponentWithCenteredContainer: React.FC<P> = (props) => (
		<View style={styles.container}>
			<WrappedComponent {...props} />
		</View>
	);

	return ComponentWithCenteredContainer;
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#fff",
	} as ViewStyle,
});

export default withCenteredContainer;
