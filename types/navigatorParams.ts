// Define the type for each screen and its parameters
export type RootStackParamList = {
	Home: undefined;
	Categories: {};
	Meal: { mealId: string }; // Example: Meals screen expects a categoryId parameter
	Meals: { categoryId: string }; // Example: Meals screen expects a categoryId parameter
	Details: { mealId: string };
};
