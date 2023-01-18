import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import AddProduct from "./components/addProducts";
import Product from "./components/product";
import ProductList from "./components/productList";
import { Routes, Route, Router, Link } from "react-router-dom";
function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/productlist"}>Product list</Link>
          </li>
          <li>
            <Link to={"/products"}>Products</Link>
          </li>
          <li>
            <Link to={"/add"}>Add Products</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/products/:id" element={<Product />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/add" element={<AddProduct />} />
        <Route path="/products" element={<Product/>}/>
      </Routes>
    </>
  );
}

export default App;
