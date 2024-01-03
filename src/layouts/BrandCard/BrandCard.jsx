import { Link } from "react-router-dom";


const BrandCard = ({brand}) => {

    const {id, image, brandName, details} = brand;
    return (
        <div>
             <div className="card card-compact bg-base-100 shadow-xl transition ease-in-out delay-120  hover:-translate-y-1 hover:scale-110 duration-250" data-aos="fade-right">
                <figure><img src={image} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-lobster text-3xl text-red-600">{brandName}</h2>
                    <p className="font-roboto">{details}</p>
                    <div className="card-actions justify-center pt-3">
                        <Link to={`/brands/${brandName}`}>
                        <button className="relative font-roboto text-xl inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                               
                                  Visit the brand
                               
                            </span>
                        </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandCard;