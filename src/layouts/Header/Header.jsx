import { NavLink } from "react-router-dom";
import logo from '../../assets/Brand/autoMedic.png'

const Header = () => {
    return (
        <div className="font-poppins sticky">

            <nav className="sticky top-0 z-10 bg-yellow-50 p-3 px-6">
                <div className=" flex justify-between items-center">
                    <div>
                        <img height={150} width={150} src={logo} alt="" />
                    </div>
                    <div className="flex gap-7 text-xl">
                        <NavLink to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-white bg-violet-500 px-2  rounded-md  font-bold" : ""
                            }
                        >Home</NavLink>
                        <NavLink to="/addProducts"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-white bg-violet-500 px-2  rounded-md  font-bold" : ""
                            }
                        >Add product</NavLink>
                        <NavLink to="/allProducts"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-white bg-violet-500 px-2  rounded-md  font-bold" : ""
                            }
                        >All Brand</NavLink>
                        <NavLink to="/myCart"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-white bg-violet-500 px-2  rounded-md  font-bold" : ""
                            }
                        >My cart</NavLink>
                    </div>
                    <div className="flex">

                        <NavLink to="/login"> <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                Login
                            </span>
                        </button></NavLink>


                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;