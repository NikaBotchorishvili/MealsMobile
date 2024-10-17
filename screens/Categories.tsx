import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { CATEGORIES } from "../utils/data/data";
import Tile from "../components/Categories/Tile";
import withCenteredContainer from "../utils/HOCs/withCenteredContainer";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigatorParams";

type Props = NativeStackScreenProps<RootStackParamList, "Categories">;

const Categories: React.FC<Props> = ({ navigation }) => {
	const pressHandler = (id: string) => {
		navigation.navigate("Meals", { categoryId: id });
	};

	return (
		<View style={styles.mainContainer}>
			<FlatList
				data={CATEGORIES}
				numColumns={2}
				renderItem={({ item }) => (
					<Tile onPress={() => pressHandler(item.id)} item={item} />
				)}
				ItemSeparatorComponent={() => <View style={{ height: 15 }} />}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
	},
	headerText: {
		textAlign: "center",
		fontWeight: "bold",
		fontSize: 30,
		textDecorationLine: "underline",
		marginBottom: 15,
	},
});

export default withCenteredContainer(Categories);
