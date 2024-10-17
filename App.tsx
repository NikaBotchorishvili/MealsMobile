import { StatusBar } from "expo-status-bar";
import { StyleSheet, useWindowDimensions, View } from "react-native";
import Categories from "./screens/Categories";
import Constants from "expo-constants";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Meals from "./screens/Meals";
import { RootStackParamList } from "./types/navigatorParams";
import Meal from "./screens/Meal";
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
	const { width, height } = useWindowDimensions();
	const padding = width > height ? 10 : Constants.statusBarHeight - 10;
	return (
		<View
			style={[
				styles.container,
				{
					paddingTop: padding,
				},
			]}
		>
			<NavigationContainer>
				<Stack.Navigator initialRouteName="Categories">
					<Stack.Screen
						name="Categories"
						component={Categories}
						options={{
							title: "All Categories",
						}}
					/>
					<Stack.Screen name="Meals" component={Meals} />
					<Stack.Screen name="Meal" component={Meal} />
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
	},
});
