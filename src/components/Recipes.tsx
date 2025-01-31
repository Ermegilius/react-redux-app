import { useSelector } from "react-redux";
import { fetchProducts } from "../store/productsSlice";
import { useEffect } from "react";
import { RootState } from "../store/store";
import { useAppDispatch } from "../hooks/hooks";

const Recipes = () => {
	const recipes = useSelector((state: RootState) => state.recipes);
	const dispatch = useAppDispatch();
	console.log("Recipes: ", recipes);

	useEffect(() => {
		dispatch(fetchProducts());
	}, [dispatch]);
	return <div>Recipes</div>;
};

export default Recipes;
