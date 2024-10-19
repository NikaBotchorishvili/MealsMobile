import { Text, View } from "react-native";
import { DrawerScreenProps } from "@react-navigation/drawer";
import { RootDrawerParamList } from "../types/navigatorParams";
import useStore from "../store/useStore";
import Meal from "../components/Favorites/Meal";
import { FlatList } from "react-native-gesture-handler";
type Props = DrawerScreenProps<RootDrawerParamList, "Favorites">;

const Favorites: React.FC<Props> = () => {
	const { favorites } = useStore();
	return (
		<View>
			<Text>Favorites</Text>

			<FlatList
				renderItem={({ item }) => <Meal meal={item} />}
				keyExtractor={({ id, title }) =>
					`${id}-${title}-${Math.round(Math.random() * 100)}`
				}
				data={favorites}
			/>
		</View>
	);
};

export default Favorites;
