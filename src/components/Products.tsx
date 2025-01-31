import { useSelector } from "react-redux";
import { fetchProducts } from "../store/productsSlice";
import { useEffect } from "react";
import { RootState } from "../store/store";
import { useAppDispatch } from "../hooks/hooks";
import { addToCart } from "../store/cartSlice";
import { Button } from "@mui/material";
import Cart from "./Cart";

const Products = () => {
	const products = useSelector((state: RootState) => state.products.products);
	const dispatch = useAppDispatch();
	console.log("Products: ", products);

	useEffect(() => {
		dispatch(fetchProducts());
	}, [dispatch]);

	return (
		<div>
			<Cart />
			{products.map((product) => (
				<div key={product.id}>
					<h3>{product.title}</h3>
					<Button
						onClick={() => {
							dispatch(
								addToCart({
									id: product.id,
									title: product.title,
									price: product.price,
									image: product.image,
								})
							);
						}}
					>
						Add to Cart
					</Button>
				</div>
			))}
		</div>
	);
};

export default Products;
