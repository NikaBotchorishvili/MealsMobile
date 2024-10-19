import { createDrawerNavigator } from "@react-navigation/drawer";
import Categories from "../../screens/Categories";
import { Text, View } from "react-native";
import { RootDrawerParamList } from "../../types/navigatorParams";
import Favorites from "../../screens/Favorites";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

const Drawer = createDrawerNavigator<RootDrawerParamList>();

const DrawerNavigator = () => {
	return (
		<Drawer.Navigator>
			<Drawer.Screen
				name="Categories"
				options={{
					title: "Categories",
					drawerIcon: () => <FontAwesomeIcon icon={faList} />,
				}}
				component={Categories}
			/>
			<Drawer.Screen
				name="Favorites"
				component={Favorites}
				options={{
					drawerIcon: () => <FontAwesomeIcon icon={faStar} />,
				}}
			/>
		</Drawer.Navigator>
	);
};

export default DrawerNavigator;
