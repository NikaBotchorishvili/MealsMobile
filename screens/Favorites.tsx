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
			<FlatList
				numColumns={1}
				style={{ width: "70%", marginHorizontal: "auto" }}
				renderItem={({ item }) => <Meal meal={item} />}
				keyExtractor={({ id, title }) =>
					`${id}-${title}-${Math.round(Math.random() * 100)}`
				}
				data={favorites}
				ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
				ListEmptyComponent={() => (
					<View style={{ marginTop: 20 }}>
						<Text style={{ textAlign: "center" }}>
							No favorite recipes yet
						</Text>
					</View>
				)}
			/>
		</View>
	);
};

export default Favorites;
