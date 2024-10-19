import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useLayoutEffect } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { RootStackParamList } from "../types/navigatorParams";
import { MEALS } from "../utils/data/data";
import { formatDuration } from "../utils/formattedDuration";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import Specifics from "../components/Meal/Specifics";
import Ingredients from "../components/Meal/Ingredients";
import Steps from "../components/Meal/Steps";
import { faSackDollar } from "@fortawesome/free-solid-svg-icons";
import Button from "../components/ui/Button";
import { faStar } from "@fortawesome/free-solid-svg-icons";

type MealsScreenProps = NativeStackScreenProps<RootStackParamList, "Meal">;

const Meal: React.FC<MealsScreenProps> = ({ route, navigation }) => {
	const meal = MEALS.find((meal) => meal.id === route.params.mealId)!;
	const { color } = route.params;

	const addRecipe = () => {
		console.log("Add Recipe");
	};
	useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: () => {
				return (
					<Button onPress={addRecipe} color={color}>
						<FontAwesomeIcon
							size={20}
							style={
								color !== undefined && {
									color: "white",
								}
							}
							secondaryColor="white"
							icon={faStar}
						/>
					</Button>
				);
			},
		});
	}, [route]);
	return (
		<ScrollView
			overScrollMode="always"
			alwaysBounceVertical={false}
			contentContainerStyle={{ gap: 20 }}
			style={styles.container}
		>
			<Image src={meal.imageUrl} style={styles.image} />
			<View style={[styles.infoContainer]}>
				<View style={{ flexDirection: "row", columnGap: 5 }}>
					<Text>
						<FontAwesomeIcon icon={faSackDollar} />
					</Text>
					<Text>
						Affordability:{" "}
						<Text style={{ fontWeight: "bold", color: color }}>
							{meal.affordability}
						</Text>
					</Text>
				</View>

				<Text style={[styles.title, { color: color }]}>
					{meal.title}
				</Text>
				<View style={[styles.iconSection, styles.center]}>
					<Text>
						<FontAwesomeIcon icon={faClock} />
					</Text>
					<Text>{formatDuration({ duration: meal.duration })}</Text>
				</View>
			</View>
			<View style={styles.infoContainer}>
				<Specifics meal={meal} />
				<Ingredients color={color} ingredients={meal.ingredients} />
				<Steps color={color} steps={meal.steps} />
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		width: "100%",
		marginBottom: 40,
	},
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
		fontWeight: "900",
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
