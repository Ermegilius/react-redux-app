import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../hooks/hooks";
import { fetchRecipes } from "../store/recipeSlice";
import { RootState } from "../store/store";

const Recipes = () => {
  const recipes = useSelector((state: RootState) => state.recipes.recipes);
  const dispatch = useAppDispatch();
  console.log("Recipes: ", recipes);

  useEffect(() => {
    dispatch(fetchRecipes());
  }, [dispatch]);

  return (
    <div>
      {recipes.map((recipe) => (
        <div key={recipe.id}>{recipe.name}</div>
      ))}
    </div>
  );
};

export default Recipes;
