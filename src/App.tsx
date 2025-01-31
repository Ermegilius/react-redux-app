import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./components/Products";
import Recipes from "./components/Recipes";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/products" element={<Products />}></Route>
					<Route path="/recipes" element={<Recipes />}></Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
