import { FlatList, StyleSheet, Text, View } from "react-native";

type Props = {
	ingredients: string[];
};

const Ingredients: React.FC<Props> = ({ ingredients }) => {
	return (
		<View style={{ alignItems: "center", rowGap: 15 }}>
			<Text style={styles.title}>Ingredients</Text>

			<View style={styles.list}>
				{ingredients.map((item, index) => (
					<View key={index}>
						<Text>
							{index + 1}. {item}
						</Text>
					</View>
				))}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	title: {
		fontSize: 20,
		fontWeight: "bold",
	},
	list: {
		gap: 5,
	},
});

export default Ingredients;
