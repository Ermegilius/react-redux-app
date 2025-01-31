import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./components/Products";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/products" element={<Products />}></Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
