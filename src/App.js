import "./App.css";
import Form from "./Auth/Form.js";
import Login from "./Auth/login.js";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import Post from "./crud/Post.js";
import Header from "./components/Header";
import UserDetails from "./components/UserDetails";
import Pages from "./products/Pages";
import Cart from "./products/Cart";
import CheckOut from "./products/checkout/CheckOut";
import NotFound from "./components/NotFound/NotFound";
import { useAuth } from "./context/AuthProvider";
import ContextLogin from "./ContextAuth/ContextLogin";
import FetchData from "./Reuseable/FetchData";
import Child2 from "./Child2";
import Child from "./Child";

function App() {
  const { isLogin } = useAuth();
  if (isLogin) {
    return (
      <div>
        {/* <Child />
        <Child2 /> */}
        <Header />
        <Routes>
          <Route path="/employ" element={<Post />} />
          <Route path="/product" element={<Pages />} />
          <Route path="/product/CartItem" element={<Cart />} />
          <Route path="/user-datails" element={<UserDetails />} />
          <Route path="/product/CartItem/Checkout" element={<CheckOut />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    );
  } else {
    return (
      <div>
        {/* <Child />
        <Child2 /> */}
        <Header />
        <Routes>
          <Route path="/Register" element={<Form />} />
          <Route path="/product" element={<Pages />} />
          <Route path="/" element={<ContextLogin />} />
          <Route path="*" element={<NotFound />} />
          {/* <Route path="*" navigate={<ContextLogin />} replace /> */}
        </Routes>
      </div>
    );
  }
}

export default App;
