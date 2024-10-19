import { create } from "zustand";
import Meal from "../utils/data/meal";

type Store = {
	favorites: Meal[];
	addFavorite: (meal: Meal) => void;
};

const useStore = create<Store>()((set) => ({
	favorites: [],
	addFavorite: (meal) => {
		set((state) => {
			const isFavorite = state.favorites.some(
				(favorite) => favorite.id === meal.id
			);
			return {
				...state,
				favorites: isFavorite
					? state.favorites.filter(
							(favorite) => favorite.id !== meal.id
					  )
					: [...state.favorites, meal],
			};
		});
	},
}));

export default useStore;
