import { useSelector } from "react-redux";
import { fetchProducts } from "../store/productsSlice";
import { useEffect } from "react";
import { RootState } from "../store/store";
import { useAppDispatch } from "../hooks/hooks";

const Products = () => {
	const products = useSelector((state: RootState) => state.products);
	const dispatch = useAppDispatch();
	console.log("Products: ", products);

	useEffect(() => {
		dispatch(fetchProducts());
	}, [dispatch]);
	return <div>Products</div>;
};

export default Products;

//Create, Connect, Provide, Use
