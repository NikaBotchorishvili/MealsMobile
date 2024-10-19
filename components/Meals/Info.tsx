import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { StyleSheet, Text, View } from "react-native";
import { formatDuration } from "../../utils/formattedDuration";

type Props = {
	title: string;
	ingredients: string[];
	color: string;
	duration: number;
};
const Info: React.FC<Props> = ({ title, ingredients, color, duration }) => {
	return (
		<View style={styles.infoSection}>
			<Text style={[{ color: color, fontWeight: "800" }]}>{title}</Text>
			<View style={[styles.iconSection, styles.center]}>
				<Text>
					<FontAwesomeIcon icon={faClock} />
				</Text>
				<Text>{formatDuration({ duration: duration })}</Text>
			</View>
			<View style={[styles.iconSection, styles.center]}>
				<Text>
					<FontAwesomeIcon icon={faShoppingCart} />
				</Text>
				<Text>{ingredients.length} Ingredients</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	iconSection: {
		gap: 5,
	},
	infoSection: {
		rowGap: 4,
	},
	center: {
		flexDirection: "row",
		alignItems: "center",
	},
});
export default Info;
