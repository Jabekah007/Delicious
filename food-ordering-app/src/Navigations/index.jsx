import { BrowserRouter,Route, Routes } from "react-router-dom";
import Header from "../Component/Header";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Menu from "../pages/Menu";
import PaymentSuccess from "../pages/PaymentSuccess";
import Cart from "../pages/cart";

const Navigation = () =>{
    return(
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/regiter" element={<Register/>}></Route>
            <Route path="/menu" element={<Menu/>}></Route>
            <Route path="cart" element={<Cart/>}></Route>
            <Route path="/payment-success" element={<PaymentSuccess/>}></Route>

        </Routes>
        </BrowserRouter>
    )
}

export default Navigation;