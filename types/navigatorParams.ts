export type RootStackParamList = {
	Home: undefined;
	DrawerNavigator: {};
	Categories: {};
	Meal: { mealId: string; color: string };
	Meals: { categoryId: string };
	Details: { mealId: string };
};
export type RootDrawerParamList = {
	Categories: {};
	Favorites: {};
};

export type RootNavigationParamList = RootDrawerParamList & RootStackParamList;
