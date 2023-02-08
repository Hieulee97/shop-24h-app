import Home from "./scenes/home/Home";
import Product from "./scenes/products/Product";
import ProductList from "./scenes/products/ProductList";
import Register from "./scenes/login/Register";
import Login from "./scenes/login/Login";
import Cart from "./scenes/cart/Cart";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
// import Success from "./scenes/login/Success";
// import { useSelector } from "react-redux";

const App = () => {
  // const user = useSelector((state) => state.user.currentUser);
  const user = true;
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/products/:category" element={<ProductList />}/>
        <Route path="/product/:id" element={<Product />}/>
        <Route path="/cart" element={<Cart />}/>
        {/* <Route path="/success">
          <Success />
        </Route> */}
        <Route exact path="/login" element={ user ? (<Navigate replace to={"/"}/>)  : (<Login />)}/>
        <Route exact path="/register" element={ user ? (<Navigate replace to={"/"}/>) : (<Register/>) }/>
      </Routes>
    </Router>
  );
};

export default App;