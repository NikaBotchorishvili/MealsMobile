import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { View } from "react-native";
import Button from "./Button";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as filledStar } from "@fortawesome/free-solid-svg-icons";

type Props = {
	favorite: boolean;
	color: string;
	handleTap: () => void;
};

const IsFavorite: React.FC<Props> = ({ favorite, color, handleTap }) => {
	return favorite ? (
		<Button onPress={handleTap} color={color}>
			<FontAwesomeIcon
				size={20}
				style={
					color !== undefined && {
						color: "white",
					}
				}
				secondaryColor="white"
				icon={filledStar}
			/>
		</Button>
	) : (
		<Button onPress={handleTap} color={color}>
			<FontAwesomeIcon
				size={20}
				style={
					color !== undefined && {
						color: "white",
					}
				}
				secondaryColor="white"
				icon={emptyStar}
			/>
		</Button>
	);
};

export default IsFavorite;
