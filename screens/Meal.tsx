import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { RootStackParamList } from "../types/navigatorParams";
import { MEALS } from "../utils/data/data";

type MealsScreenProps = NativeStackScreenProps<RootStackParamList, "Meal">;

const Meal: React.FC<MealsScreenProps> = ({ navigation, route }) => {
	const meal = MEALS.find((meal) => meal.id === route.params.mealId)!;
	return (
		<View>
			<Image src={meal.imageUrl} style={styles.image} />
			<Text>{meal.title}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	image: {
		height: 200,
		width: "100%",
		objectFit: "cover",
	},
});

export default Meal;
