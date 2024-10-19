import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useCallback, useLayoutEffect } from "react";
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
import useStore from "../store/useStore";
import Toast from "react-native-toast-message";
import IsFavorite from "../components/ui/isFavorite";
type MealsScreenProps = NativeStackScreenProps<RootStackParamList, "Meal">;

const Meal: React.FC<MealsScreenProps> = ({ route, navigation }) => {
	const meal = MEALS.find((meal) => meal.id === route.params.mealId)!;
	const { color } = route.params;
	const { addFavorite, favorites } = useStore();

	const isFavorite = favorites.some((favorite) => favorite.id === meal.id);
	const handleFavoriteRecipe = useCallback(() => {
		const favorite = isFavorite;

		if (favorite) {
			Toast.show({
				type: "info",
				text1: `${meal.title} removed from favorites`,
				text2: "You can find it in the favorites tab 🌟",
				text1Style: {
					textAlign: "center",
					fontSize: 17,
				},
				text2Style: {
					textAlign: "center",
				},
			});
		} else {
			Toast.show({
				type: "success",
				text1: `${meal.title} added to favorites`,
				text2: "You can find it in the favorites tab 🌟",
				text1Style: {
					textAlign: "center",
					fontSize: 17,
				},
				text2Style: {
					textAlign: "center",
				},
				autoHide: true,
				visibilityTime: 3000,
			});
		}

		addFavorite(meal);
	}, [meal, favorites, addFavorite]);

	useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: () => {
				return (
					<IsFavorite
						handleTap={handleFavoriteRecipe}
						favorite={isFavorite}
						color={color}
					/>
				);
			},
		});
	}, [route, handleFavoriteRecipe, color, navigation]);
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
