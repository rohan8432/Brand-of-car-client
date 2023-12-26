import { useState } from "react";
import BrandCard from "../BrandCard/BrandCard";


const BrandCards = () => {

    const [brands, setBrands] = useState([]);
    
    fetch('/data.json')
    .then(res => res.json())
    .then(data => {
        setBrands(data)
    })

    return (
        <div>
             <div className="pt-12 px-11">
            
            <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-10">
             {
                 brands.map(brand => <BrandCard key={brand.id} brand = {brand}></BrandCard>)
             }
            </div>
 
 
         </div>
        </div>
    );
};

export default BrandCards;