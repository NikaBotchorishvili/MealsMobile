import {
	View,
	Pressable,
	Text,
	StyleSheet,
	Platform,
	useWindowDimensions,
} from "react-native";
import Category from "../../utils/category";

type Props = {
	item: Category;
};

const Tile: React.FC<Props> = ({ item }) => {
	const { height } = useWindowDimensions();
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
			<Pressable style={({ pressed }) => [pressed && styles.tapItem]}>
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
