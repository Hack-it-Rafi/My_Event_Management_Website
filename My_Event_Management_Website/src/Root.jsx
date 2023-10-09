import { Outlet } from "react-router-dom";
import Header from "./Header";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Root = () => {
    return (
        <div>
            <Header></Header>
            <div className="mb-20">
            <NavBar></NavBar>
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;