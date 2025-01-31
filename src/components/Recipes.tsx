import { useSelector } from "react-redux";
import { fetchRecipes } from "../store/recipesSlice";
import { useEffect } from "react";
import { RootState } from "../store/store";
import { useAppDispatch } from "../hooks/hooks";

const Recipes = () => {
	const { recipes, isLoading } = useSelector((state: RootState) => state.recipes);
	const dispatch = useAppDispatch();
	console.log("Recipes: ", recipes);

	useEffect(() => {
		dispatch(fetchRecipes());
	}, [dispatch]);

	console.log("isLoading: ", isLoading);
	console.log("Recipes: ", recipes);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (recipes.length === 0) {
		return <div>No recipes found.</div>;
	}

	return (
		<div>
			{recipes.map((recipe) => (
				<div key={recipe.id}>{recipe.name}</div>
			))}
		</div>
	);
};

export default Recipes;
