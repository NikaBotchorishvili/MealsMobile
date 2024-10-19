import { Image, Pressable, Text, View } from "react-native";
import Meal from "../../utils/data/meal";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootNavigationParamList } from "../../types/navigatorParams";
type Props = {
	meal: Meal;
};

const FavoriteMeal: React.FC<Props> = ({ meal }) => {
	const { navigate } =
		useNavigation<NavigationProp<RootNavigationParamList>>();

	const handleTap = () => {
		navigate("Meal", {
			mealId: meal.id,
			color: "red",
		});
	};
	return (
		<Pressable onPress={handleTap}>
			<View>
				<Text>{meal.title}</Text>
				<Image
					style={{ width: "100%", height: 200 }}
					source={{ uri: meal.imageUrl }}
				/>
				<FontAwesomeIcon icon={faStar} />
			</View>
		</Pressable>
	);
};

export default FavoriteMeal;
