import { Text, View, StyleSheet } from "react-native";
import Meal from "../../utils/data/meal";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
	faLeaf,
	faBreadSlice,
	faCarrot,
	faTintSlash,
} from "@fortawesome/free-solid-svg-icons";

type Props = {
	meal: Meal;
};

const Specifics: React.FC<Props> = ({
	meal: { isGlutenFree, isVegan, isVegetarian, isLactoseFree },
}) => {
	return (
		<View style={styles.outerContainer}>
			<View style={styles.container}>
				{isLactoseFree && (
					<View style={styles.item}>
						<FontAwesomeIcon icon={faTintSlash} />
						<Text>Lactose Free</Text>
					</View>
				)}

				{isGlutenFree && (
					<View style={styles.item}>
						<FontAwesomeIcon icon={faBreadSlice} />
						<Text>Gluten Free</Text>
					</View>
				)}
				{isVegan && (
					<View style={styles.item}>
						<FontAwesomeIcon icon={faLeaf} />
						<Text>Vegan</Text>
					</View>
				)}
				{isVegetarian && (
					<View style={styles.item}>
						<FontAwesomeIcon icon={faCarrot} />
						<Text>Vegetarian</Text>
					</View>
				)}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	outerContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		marginHorizontal: "auto",
	},
	container: {
		flexDirection: "row",
		flexWrap: "wrap",
		width: "80%", // Optional: Adjusts width to control item spacing
		columnGap: 5,
	},
	item: {
		width: "33.3%",
		flexDirection: "row",
		alignItems: "center",
		padding: 5,
		columnGap: 2,
		justifyContent: "center",
	},
});

export default Specifics;
