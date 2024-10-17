import { Text, View } from "react-native";
import { RootStackParamList } from "../types/navigatorParams";
import { RouteProp, useRoute } from "@react-navigation/native";

type MealsScreenRouteProp = RouteProp<RootStackParamList, "Meals">;

const Meals: React.FC = () => {
	const route = useRoute<MealsScreenRouteProp>();
	return (
		<View>
			<Text>Meals {route.params.categoryId}</Text>
		</View>
	);
};

export default Meals;
