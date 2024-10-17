import React from "react";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { ScreenProps } from "../../types/screen"; // Import the ScreenProps type

// HOC to inject navigator prop
function withNavigation<T>(Component: React.ComponentType<ScreenProps<T>>) {
	return (props: Omit<ScreenProps<T>, "navigator">) => {
		const navigator = useNavigation<NavigationProp<any>>();
		return <Component {...(props as T)} navigator={navigator} />;
	};
}

export default withNavigation;
