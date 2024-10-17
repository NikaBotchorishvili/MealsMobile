import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { RootStackParamList } from "../types/navigatorParams";
import { MEALS } from "../utils/data/data";
import { formatDuration } from "../utils/formattedDuration";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import Specifics from "../components/Meal/Specifics";
import Ingredients from "../components/Meal/Ingredients";

type MealsScreenProps = NativeStackScreenProps<RootStackParamList, "Meal">;

const Meal: React.FC<MealsScreenProps> = ({ route }) => {
	const meal = MEALS.find((meal) => meal.id === route.params.mealId)!;
	console.log(meal.ingredients);
	console.log(meal.steps);
	return (
		<ScrollView
			contentContainerStyle={{ gap: 20 }}
			style={styles.container}
		>
			<Image src={meal.imageUrl} style={styles.image} />
			<View style={[styles.infoContainer]}>
				<Text>{meal.affordability}</Text>

				<Text style={styles.title}>{meal.title}</Text>
				<View style={[styles.iconSection, styles.center]}>
					<Text>
						<FontAwesomeIcon icon={faClock} />
					</Text>
					<Text>{formatDuration({ duration: meal.duration })}</Text>
				</View>
			</View>
			<Specifics meal={meal} />
			<Ingredients ingredients={meal.ingredients} />
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {},
	infoContainer: {
		width: "80%",
		marginHorizontal: "auto",
		alignItems: "center",
		gap: 10,
	},
	image: {
		height: 200,
		width: "100%",
		objectFit: "cover",
	},
	title: {
		textAlign: "center",
		fontSize: 25,
		fontWeight: "bold",
	},
	iconSection: {
		flexDirection: "row",
		gap: 5,
	},
	center: {
		justifyContent: "center",
	},
});

export default Meal;
