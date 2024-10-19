import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import Meal from "../../utils/data/meal";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faShoppingCart, faStar } from "@fortawesome/free-solid-svg-icons";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootNavigationParamList } from "../../types/navigatorParams";
import { formatDuration } from "../../utils/formattedDuration";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import IsFavorite from "../ui/isFavorite";
import useStore from "../../store/useStore";

type Props = {
	meal: Meal;
};

const FavoriteMeal: React.FC<Props> = ({ meal }) => {
	const { navigate } =
		useNavigation<NavigationProp<RootNavigationParamList>>();
	const { addFavorite } = useStore();
	const handleTap = () => {
		navigate("Meal", {
			mealId: meal.id,
			color: "red",
		});
	};

	const handleFavorite = () => {
		addFavorite(meal);
	};
	return (
		<Pressable style={styles.rootContainer} onPress={handleTap}>
			<View style={styles.container}>
				<Image style={styles.image} source={{ uri: meal.imageUrl }} />
				<View style={styles.infoSection}>
					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							paddingHorizontal: 10,
						}}
					>
						<Text style={[{ color: "red", fontWeight: "800" }]}>
							{meal.title}
						</Text>
						<IsFavorite
							favorite={true}
							color="red"
							handleTap={handleFavorite}
						/>
					</View>
					<View style={[styles.iconSection, styles.center]}>
						<Text>
							<FontAwesomeIcon icon={faClock} />
						</Text>
						<Text>
							{formatDuration({ duration: meal.duration })}
						</Text>
					</View>
					<View style={[styles.iconSection, styles.center]}>
						<Text>
							<FontAwesomeIcon icon={faShoppingCart} />
						</Text>
						<Text>{meal.ingredients.length} Ingredients</Text>
					</View>
				</View>
			</View>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	rootContainer: {
		backgroundColor: "white",
		padding: 15,
		borderRadius: 15,
		// Shadow for iOS
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 1 },
		shadowOpacity: 0.2,
		shadowRadius: 1.41,
		// Shadow for Android
		elevation: 4,
		marginVertical: 10,
	},
	container: {
		flex: 1,
		gap: 15,
	},
	image: {
		width: "100%",
		height: 200,
		borderRadius: 10,
	},
	titleContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginTop: 10,
	},
	title: {
		fontSize: 16,
		fontWeight: "bold",
		flexShrink: 1,
	},
	iconSection: {
		gap: 5,
	},
	infoSection: {
		rowGap: 4,
	},
	center: {
		flexDirection: "row",
		alignItems: "center",
	},
});

export default FavoriteMeal;
