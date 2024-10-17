import {
	View,
	Text,
	Image,
	StyleSheet,
	ViewStyle,
	Pressable,
} from "react-native";
import MealData from "../../utils/data/meal";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../types/navigatorParams";
import { formatDuration } from "../../utils/formattedDuration";

type Props = {
	meal: MealData;
	passedStyles: ViewStyle;
};

const Meal: React.FC<Props> = ({ meal, passedStyles }) => {
	const navigation = useNavigation<NavigationProp<RootStackParamList>>();
	const handlePress = () => {
		navigation.navigate("Meal", { mealId: meal.id });
	};
	return (
		<Pressable
			onPress={handlePress}
			style={({ pressed }) => [
				styles.mealContainer,
				passedStyles,
				pressed && styles.pressed,
			]}
		>
			<View style={{ gap: 10 }}>
				<Image src={meal.imageUrl} style={styles.image} />
				<View style={styles.infoSection}>
					<Text>Meals {meal.title}</Text>
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
	mealContainer: {
		elevation: 10,
		backgroundColor: "white",
		shadowOpacity: 0.26,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 5,
		padding: 10,
		borderRadius: 15,
	},
	image: {
		width: "100%",
		borderRadius: 10,
		aspectRatio: 1 / 1,
	},
	center: {
		flexDirection: "row",
		alignItems: "center",
	},
	iconSection: {
		gap: 5,
	},
	infoSection: {
		rowGap: 4,
	},
	pressed: {
		opacity: 0.8,
	},
});

export default Meal;
