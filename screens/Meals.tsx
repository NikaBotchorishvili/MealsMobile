import { FlatList, StyleSheet, useWindowDimensions, View } from "react-native";
import { MEALS } from "../utils/data/data";
import Meal from "../components/Meals/Meal";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigatorParams";

type MealsScreenProps = NativeStackScreenProps<RootStackParamList, "Meals">;

const Meals: React.FC<MealsScreenProps> = ({ route }) => {
	const { width } = useWindowDimensions();
	const numColumns = 2;
	const spacingBetweenElements = 20;

	const elementWidth =
		(width - spacingBetweenElements * (numColumns + 1)) / numColumns;

	const meals = MEALS.filter((meal) =>
		meal.categoryIds.includes(route.params.categoryId)
	);

	return (
		<View style={styles.container}>
			<FlatList
				numColumns={numColumns}
				data={meals}
				renderItem={({ item }) => (
					<Meal
						meal={item}
						passedStyles={{
							width: elementWidth,
							marginLeft: spacingBetweenElements / 2,
							marginRight: spacingBetweenElements / 2,
							marginBottom: 15,
						}}
					/>
				)}
				keyExtractor={(item) => item.id}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: "100%",
		marginTop: 20,
		paddingHorizontal: 10,
	},
});

export default Meals;
