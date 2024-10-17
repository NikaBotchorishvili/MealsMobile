import {
	View,
	Pressable,
	Text,
	StyleSheet,
	useWindowDimensions,
} from "react-native";
import Category from "../../utils/data/category";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../types/navigatorParams";
type Props = {
	item: Category;
	onPress: (id: string) => void;
};

const Tile: React.FC<Props> = ({ item, onPress }) => {
	const { height } = useWindowDimensions();
	const navigator = useNavigation<NavigationProp<RootStackParamList>>();

	return (
		<View
			style={[
				styles.container,
				{
					width: height < 400 ? 300 : 150,
					aspectRatio: height < 400 ? "2/1" : "1/1",
				},
			]}
		>
			<Pressable
				style={({ pressed }) => [pressed && styles.tapItem]}
				onPress={() => {
					navigator.navigate("Meals", { categoryId: item.id });
				}}
			>
				<View style={[{ backgroundColor: item.color }, styles.item]}>
					<Text style={styles.itemText}>{item.title}</Text>
				</View>
			</Pressable>
		</View>
	);
};

export default Tile;

const styles = StyleSheet.create({
	container: {
		padding: 10,
		fontSize: 18,
		height: 150,
		borderRadius: 10,

		aspectRatio: "1/1",
	},
	item: {
		borderRadius: 10,
		alignItems: "center",
		justifyContent: "center",
		width: "100%",
		height: "100%",
	},
	itemText: {
		color: "white",
		fontSize: 18,
	},
	tapItem: {
		opacity: 0.8,
	},
});
