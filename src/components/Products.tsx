import { useSelector } from "react-redux";
import { fetchProducts } from "../store/productsSlice";
import { useEffect } from "react";
import { RootState } from "../store/store";
import { useAppDispatch } from "../hooks/hooks";
import { addToCart } from "../store/cartSlice";

const Products = () => {
	const products = useSelector((state: RootState) => state.products);
	const cart = useSelector((state: RootState) => state.cart.items);
	const dispatch = useAppDispatch();
	console.log("Products: ", products);

	useEffect(() => {
		dispatch(fetchProducts());
	}, [dispatch]);

	return (
		<div>
			{products.map((product) => (
				<div key={product.id}>
					<h2>{product.title}</h2>
					<button
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
					</button>
				</div>
			))}
		</div>
	);
};

export default Products;
