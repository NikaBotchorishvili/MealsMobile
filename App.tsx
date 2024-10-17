import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Categories from "./screens/Categories";
import Constants from "expo-constants";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Meals from "./screens/Meals";
const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<View style={styles.container}>
			<NavigationContainer>
				<Stack.Navigator initialRouteName="Categories">
					<Stack.Screen name="Categories" component={Categories} />
					<Stack.Screen name="Meals" component={Meals} />
				</Stack.Navigator>
				<StatusBar style="auto" />
			</NavigationContainer>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		paddingTop: Constants.statusBarHeight + 30,
	},
});
