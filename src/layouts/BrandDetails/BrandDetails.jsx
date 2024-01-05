
import { useLoaderData, useParams } from "react-router-dom";
import Brand from "../Brand/Brand";
import { useEffect, useState } from "react";
import slideOne from "../../assets/Brand/slide1.jpg"
import slideTwo from "../../assets/Brand/slide2.jpg"
import slideThree from "../../assets/Brand/slide3.jpg"



const BrandDetails = () => {
    const {brandName} = useParams();
    const allBrands = useLoaderData();
    const [filterBrands, setFilterBrands] = useState(allBrands);
    // console.log(allBrands)

    useEffect(()=>{

        const filtered = allBrands.filter(brand => brand.brandName === brandName);

        setFilterBrands(filtered);


    },[])

    return (
        <div>
           <div className="">
                <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={slideOne} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={slideTwo} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={slideThree} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                
            </div>
                </div>
            <div className="py-10 px-10">
                
                <div className="grid md:grid-cols-2 gap-40">
                    {
                        filterBrands.map(brand => <Brand key={brand._id} brand={brand}></Brand>)
                    }
                    
                </div>
            </div>
        </div>
    );
};

export default BrandDetails;

