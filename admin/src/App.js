import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.user.currentUser);
  console.log(user)
  let admin;
  if (user=== null){
    admin = null;
  }
  else {
    admin = user.isAdmin;
  }
  return (
    <Router>
    {/* <Routes>
       <Route path="/" element={<Login/>}/>
    </Routes> */}
    {
      admin ? (
          <>
              <Topbar/>
              <div className='container'>
                  <Sidebar/>
                  <Routes>
                      <Route path="/" element={<Home/>}></Route>
                      <Route path="/users" element={<UserList/>}></Route>
                      <Route path="/user/:userId" element={<User/>}></Route>
                      <Route path="/newUser" element={<NewUser/>}></Route>
                      <Route path="/products" element={<ProductList/>}></Route>
                      <Route path="/product/:productId" element={<Product/>}></Route>
                      <Route path="/newProduct" element={<NewProduct/>}></Route>
                      {/* <Route path="/login" element={ admin ? <Navigate to="/"/>:<Login/>}></Route> */}
                  
                  </Routes>
              </div> 
          </>
      ) : (
          <Routes>
              <Route path="/" element={<Login/>}/>
          </Routes>
         
      )
    }                                                                 
    </Router>
  );
}

export default App;