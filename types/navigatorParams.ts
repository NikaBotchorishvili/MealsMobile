// Define the type for each screen and its parameters
export type RootStackParamList = {
	Home: undefined;
	Categories: undefined;
	Meals: { categoryId: string }; // Example: Meals screen expects a categoryId parameter
	Details: { mealId: string };
};
