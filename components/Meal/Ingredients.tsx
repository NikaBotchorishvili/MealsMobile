import { StyleSheet, Text, View } from "react-native";

type Props = {
	ingredients: string[];
	color: string;
};

const Ingredients: React.FC<Props> = ({ ingredients, color }) => {
	return (
		<View style={styles.container}>
			<Text style={[styles.title, { color: color }]}>Ingredients</Text>

			<View style={styles.list}>
				{ingredients.map((item, index) => (
					<View key={index} style={styles.listItem}>
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
	container: {
		alignItems: "center",
		rowGap: 15,
		width: "100%",
		paddingHorizontal: 10,
	},
	title: {
		fontSize: 20,
		marginHorizontal: "auto",
		fontWeight: "bold",
	},
	list: {
		alignItems: "center",
		width: "100%",
	},
	listItem: {
		width: "100%",
	},
});

export default Ingredients;
