import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Categories from "./screens/Categories";
import Constants from "expo-constants";

export default function App() {
	return (
		<View style={styles.container}>
			<Categories />
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
		paddingTop: Constants.statusBarHeight + 30,
	},
});
