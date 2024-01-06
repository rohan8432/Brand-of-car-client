import { FaStar } from "react-icons/fa";

const EachCardDetail = ({ EachBrands }) => {


    const { _id, Name, BrandName, ShortDescription, photoUrl, Rating, Price } = EachBrands;

    const overlayStyle = {
        position: 'absolute',
        backgroundColor: '#00000080',
        zIndex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };


    return (
        <div>
            <img className="" src={photoUrl} width={1263} alt="" />

            <div className="h-40 absolute w-[1263px] bottom-[-36rem]" style={overlayStyle}>

                <button className=" absolute rounded-md font-lobster left-10 w-80 inline-flex mb-2 mr-2 overflow-hidden text-3xl font-bold text-gray-900 group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                    <span className="relative py-6 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md w-80 group-hover:bg-opacity-0">
                        Add to Cart  ${Price}
                    </span>
                </button>
            </div>

            <br />
            <div className="flex justify-between px-10">
                <h1 className="text-5xl text-red-950 font-lato font-bold">{Name}</h1>
                <p className="text-3xl flex items-center pr-7 font-roboto"><span className="pr-2 text-red-950 ">Rating</span><FaStar className="text-yellow-500">
                    </FaStar> {Rating}</p>
            </div>
            <div>
                <p className="font-lato text-xl text-green-900 p-10">{ShortDescription}</p>

            </div>
        </div>
    );
};

export default EachCardDetail;