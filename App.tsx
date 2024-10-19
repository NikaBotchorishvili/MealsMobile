import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, useWindowDimensions, View } from "react-native";
import Categories from "./screens/Categories";
import Constants from "expo-constants";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Meals from "./screens/Meals";
import { RootStackParamList } from "./types/navigatorParams";
import Meal from "./screens/Meal";
import { CATEGORIES, MEALS } from "./utils/data/data";
import DrawerNavigator from "./utils/Navigation/Drawer";

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
				<Stack.Navigator>
					<Stack.Screen
						name="DrawerNavigator"
						options={{
							title: "Meals",
							headerShown: false,
						}}
						component={DrawerNavigator}
					/>
					<Stack.Screen
						name="Meals"
						component={Meals}
						options={({ route }) => {
							const { categoryId } = route.params;

							const category = CATEGORIES.find(
								(category) => category.id === categoryId
							);
							return {
								headerTitle: () => (
									<Text style={styles.title}>
										{category!.title}
									</Text>
								),
							};
						}}
					/>
					<Stack.Screen
						name="Meal"
						component={Meal}
						options={({ route }) => {
							const { mealId, color } = route.params;

							const meal = MEALS.find(
								(meal) => meal.id === mealId
							);
							return {
								headerTitle: () => (
									<Text
										style={[
											styles.title,
											{ maxWidth: "95%" },
										]}
									>
										{meal!.title}
									</Text>
								),
							};
						}}
					/>
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
		width: "100%",
	},
	title: {
		fontSize: 18,
		fontWeight: "bold",
		textAlign: "center",
	},
});
