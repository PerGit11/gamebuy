import {Routes, Route} from "react-router-dom";
import {HomePage, ProductsList} from "../pages";
import {ProductDetail} from "../pages/ProductDetail";
import {Register} from "../pages/Register";
import {Login} from "../pages/Login";
import {CartPage} from "../pages/Cart/CartPage";
import {ProtectedRoutes} from "./ProtectedRoutes";
import {OrderPage} from "../pages/Order/OrderPage";
import {DashboardPage} from "../pages/Dashboard/DashboardPage";
import {PageNotFound} from "../pages/PageNotFound";

export const AllRoutes = () => {
    return (
        <>
            <Routes>
                <Route path={"/"} element={<HomePage/>}/>
                <Route path={"/products"} element={<ProductsList/>}/>
                <Route path={"/products/:id"} element={<ProductDetail/>}/>
                <Route path={"/register"} element={<Register/>}/>
                <Route path={"/login"} element={<Login/>}/>
                <Route path={"*"} element={<PageNotFound/>}/>

                <Route path={"/cart"} element={<ProtectedRoutes><CartPage/></ProtectedRoutes>}/>
                <Route path={"/order-summary"} element={<ProtectedRoutes><OrderPage/></ProtectedRoutes>}/>
                <Route path={"/dashboard"} element={<ProtectedRoutes><DashboardPage/></ProtectedRoutes>}/>
            </Routes>
        </>
    )
}
