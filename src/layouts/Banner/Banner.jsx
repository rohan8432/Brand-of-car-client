import car from '../../assets/Brand/carLogo.png'

const Banner = () => {
    return (
        <div className='flex justify-between items-center bg-yellow-50 px-20 font-lobster' >
            <div className='font-extrabold text-8xl text-red-700' >
                Auto medic <br />
                 <span>
                    Car shop
                </span>
            </div>
            <div>
                <img height={600} width={600} src={car} alt=""/>
            </div>
        </div>
    );
};

export default Banner;