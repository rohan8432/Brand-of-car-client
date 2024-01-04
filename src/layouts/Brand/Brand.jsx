import { FaStar } from "react-icons/fa";



const Brand = ({ brand }) => {

    const { _id, Name, BrandName, ShortDescription, photoUrl, Rating, Price } = brand;
    return (
        <div>
            
            <div className="card card-compact bg-base-100 shadow-xl transition ease-in-out delay-120  hover:-translate-y-1 hover:scale-110 duration-250">
                <figure><img src={photoUrl} alt="cars" /></figure>
                <div className="card-body">
                    <div className="flex items-center gap-16">
                        <h2 className="card-title font-lobster text-3xl text-red-600">{Name}</h2>
                        <p className="text-xl flex items-center font-lobster text-red-700"><FaStar className="text-yellow-500"></FaStar>{Rating}</p>
                    </div>
                    <div className="card-actions flex items-center">
                        <p className="text-2xl text-yellow-700 font-bold font-lato">BDT  {Price}</p>
                        
                        <button className="relative inline-flex items-center font-roboto w-36 justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                            <span className="relative px-5 py-2.5 transition-all w-36 ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                See details
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Brand;