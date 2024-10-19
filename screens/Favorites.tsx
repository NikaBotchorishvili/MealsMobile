import { Text, View } from "react-native";
import { DrawerScreenProps } from "@react-navigation/drawer";
import { RootDrawerParamList } from "../types/navigatorParams";
type Props = DrawerScreenProps<RootDrawerParamList, "Favorites">;

const Favorites: React.FC<Props> = () => {
	return (
		<View>
			<Text>Favorites</Text>
		</View>
	);
};

export default Favorites;
