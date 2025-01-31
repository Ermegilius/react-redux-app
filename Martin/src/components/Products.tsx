import { Button } from "@mui/material";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../hooks/hooks";
import { addToCart } from "../store/cartSlice";
import { fetchProducts } from "../store/productsSlice";
import { RootState } from "../store/store";
import Cart from "./Cart";

const Products = () => {
  const products = useSelector((state: RootState) => state.products.products);
  const dispatch = useAppDispatch();
  console.log(": ", products);

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
            onClick={() =>
              dispatch(
                addToCart({
                  id: product.id,
                  title: product.title,
                  price: product.price,
                  image: product.image,
                })
              )
            }
          >
            Add to Cart
          </Button>
        </div>
      ))}
    </div>
  );
};

export default Products;
