import { Badge, Box, Drawer, IconButton, ListItem, ListItemText } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { toggleCart } from "../store/cartSlice";
import { ShoppingCart as ShoppingCartIcon } from "@mui/icons-material";

const Cart = () => {
	const { items, isOpen } = useAppSelector((state) => state.cart);
	const dispatch = useAppDispatch();

	return (
		<>
			<IconButton color="inherit" onClick={() => dispatch(toggleCart())}>
				<Badge badgeContent={items.length} color="secondary">
					<ShoppingCartIcon />
				</Badge>
			</IconButton>

			<Drawer anchor="right" open={isOpen} onClose={() => dispatch(toggleCart())}>
				<Box sx={{ width: 400 }}>
					{items.map((item) => (
						<ListItem key={item.id}>
							<ListItemText primary={item.title} secondary={item.price} />
							<ListItemText secondary={item.quantity} />
						</ListItem>
					))}
				</Box>
			</Drawer>
		</>
	);
};

export default Cart;
