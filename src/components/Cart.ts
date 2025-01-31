import { IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { toggleCart } from "../store/cartSlice";

const Cart = () => {
	const { items, isOpen } = useAppSelector((state) => state.cart);
	const dispatch = useAppDispatch();

	return (
		<>
		<IconButton>
		</>
	);
};

export default Cart;
