import React from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { CATEGORIES } from "../utils/data";
import Tile from "../components/Categories/Tile";

const Categories = () => {
	return (
		<View style={styles.mainContainer}>
			<FlatList
				data={CATEGORIES}
				numColumns={2}
				renderItem={({ item }) => <Tile item={item} />}
				ItemSeparatorComponent={() => <View style={{ height: 15 }} />}
				ListHeaderComponent={() => (
					<View>
						<Text style={styles.headerText}>Categories</Text>
					</View>
				)}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
	},
	headerContainer: {},
	headerText: {
		textAlign: "center",
		fontWeight: "bold",
		fontSize: 30,
		textDecorationLine: "underline",
		marginBottom: 15,
	},
});

export default Categories;
