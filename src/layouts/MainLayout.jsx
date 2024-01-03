import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
// import Banner from "./Banner/Banner";

import Footer from "./Footer/Footer";


const MainLayout = () => {
    return (
        <div>
            <Header></Header>
            {/* <Banner></Banner> */}
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;