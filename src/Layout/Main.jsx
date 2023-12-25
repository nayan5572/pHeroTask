import { Outlet } from "react-router-dom";
import NavbarTop from "../Pages/Home/NavbarTop/NavbarTop";
import NavbarMain from "../Pages/Home/NavbarMain/NavbarMain";
import Footer from "../Pages/Home/Footer/Footer";

const Main = () => {
    return (
        <div>
            <NavbarTop></NavbarTop>
            <NavbarMain></NavbarMain>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;