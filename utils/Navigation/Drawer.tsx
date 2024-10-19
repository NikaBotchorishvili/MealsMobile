import { createDrawerNavigator } from "@react-navigation/drawer";
import Categories from "../../screens/Categories";
import { Text, View } from "react-native";
import { RootDrawerParamList } from "../../types/navigatorParams";
import Favorites from "../../screens/Favorites";

const Drawer = createDrawerNavigator<RootDrawerParamList>();

const DrawerNavigator = () => {
	return (
		<Drawer.Navigator>
			<Drawer.Screen
				name="Categories"
				options={{
					title: "Categories",
				}}
				component={Categories}
			/>
			<Drawer.Screen name="Favorites" component={Favorites} />
		</Drawer.Navigator>
	);
};

export default DrawerNavigator;
