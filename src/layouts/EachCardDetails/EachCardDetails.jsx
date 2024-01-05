import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import EachCardDetail from "../EachCardDetail/EachCardDetail";


const EachCardDetails = () => {

    const {_id} = useParams();
    console.log(_id);

    const [EachBrands, setEachBrands] = useState({});
    const Brands = useLoaderData();

    useEffect(()=>{

        const EachBrand = Brands.find(brand => brand._id === _id);

        setEachBrands(EachBrand);

    },[Brands, _id]);


    return (
        <div>
           <EachCardDetail EachBrands={EachBrands}></EachCardDetail>
            
        </div>
    );
};

export default EachCardDetails;