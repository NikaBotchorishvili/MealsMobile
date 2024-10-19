import { StyleSheet, Text, View } from "react-native";

type Props = {
	steps: string[];
	color: string;
};

const Steps: React.FC<Props> = ({ steps, color }) => {
	return (
		<View style={styles.container}>
			<Text style={[styles.title, { color: color }]}>Steps</Text>
			<View style={styles.list}>
				{steps.map((step, index) => (
					<View style={styles.listItem} key={index}>
						<Text>
							{index + 1}. {step}
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

export default Steps;
