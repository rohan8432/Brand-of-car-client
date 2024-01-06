import { useLoaderData } from "react-router-dom";
import Slider from "../Slider/Slider";
import Swal from "sweetalert2";


const UpdateCar = () => {

    const brand = useLoaderData();
    console.log(brand);
    const { _id, Name, BrandName, ShortDescription, photoUrl, Rating, Price, Type } = brand;

    const  handleUpdateCar = event =>{
        event.preventDefault();

        const form = event.target;
        const Name = form.Name.value;
        const brandName = form.brandName.value;
        const Price = form.Price.value;
        const Type = form.Type.value;
        const Rating = form.Rating.value; 
        const ShortDescription = form.ShortDescription.value;
        const photoUrl = form.photoUrl.value;

        const UpdateCar = {Name, brandName, Price, Type, Rating, ShortDescription, photoUrl};
        
        console.log(UpdateCar);

        fetch(`http://localhost:5000/car/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(UpdateCar)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'success', 
                    text: 'Car updated successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })



    }
    


    return (
        <div className="bg-yellow-50">
        <div className="py-10">
            <Slider></Slider>
        </div>
        <div className="p-20 font-roboto">

            <h1 className="text-4xl text-blue-700 font-extrabold mb-6 font-lobster">Update New Car information</h1>
            <form onSubmit={handleUpdateCar} className="md:w-full" >
                {/* row no. 1 */}
                <div className="md:flex gap-20 mb-8">
                    <div>
                        <label htmlFor="">Name</label>
                        <br />
                        <input type="text" defaultValue={Name} className="border border-red-600 p-2 rounded-md w-96" placeholder="Car name" name="Name" id="" />
                    </div>
                    <div>
                        <label htmlFor="">Brand Name</label>
                        <br />
                        <select className="border border-red-600 w-96 p-2 text-gray-500 rounded-md bg-white" name="brandName" id="cars">
                            <option value="Toyota">Toyota...</option>
                            <option value="Tesla">Tesla</option>
                            <option value="BMW">BMW</option>
                            <option value="Mercedes-Benz">Mercedes-Benz</option>
                            <option value="Ferrari">Ferrari</option>
                            <option value="Ford">Ford</option>
                        </select>
                    </div>
                </div>
                {/* row no. 2 */}
                <div className="md:flex gap-20 mb-8">
                    <div>
                        <label htmlFor="">Price</label>
                        <br />
                        <input type="number" name="Price" defaultValue={Price}  className="border border-red-600 p-2 rounded-md w-96" placeholder="Price" id="" />
                    </div>
                    <div>
                        <label htmlFor="">Type</label>
                        <br />

                        <select className="border border-red-600 w-96 p-2 text-gray-500 rounded-md bg-white" name="Type" defaultValue={Type} id="cars">
                            <option value="Default">Default...</option>
                            <option value="SEDAN">SEDAN</option>
                            <option value="COUPE">COUPE</option>
                            <option value="SPORTS CAR">SPORTS CAR</option>
                            <option value="STATION WAGON">STATION WAGON</option>
                            <option value="HATCHBACK">HATCHBACK</option>
                        </select>
                    </div>
                </div>
                {/* row no. 3 */}
                <div className="md:flex gap-20 mb-8">
                    <div>
                        <label htmlFor="">Short Description</label>
                        <br />
                        <input type="text" defaultValue={ShortDescription}  name="ShortDescription" className="border border-red-600 p-2 rounded-md w-96" placeholder="Short Description" id="" />
                    </div>
                    <div>
                        <label htmlFor="">Rating</label>
                        <br />


                        <select defaultValue={Rating} className="border border-red-600 w-96 p-2 text-gray-500 rounded-md bg-white" name="Rating" id="cars">
                            <option value="Default">Default</option>
                            <option value="4.1">4.1</option>
                            <option value="=4.2">4.2</option>
                            <option value="4.3">4.3 </option>
                            <option value="4.4">4.4 </option>
                            <option value="4.5">4.5 </option>
                            
                        </select>

                    </div>
                </div>
                {/* row no. 4 */}
                <div className="mb-8">
                    <div>
                        <label htmlFor="">Photo URL</label>
                        <br />
                        <input type="text" defaultValue={photoUrl}  name="photoUrl" className="border border-red-600 p-2 rounded-md w-3/4" placeholder="photo URL" id="" />
                    </div>

                </div>

                <button className="relative inline-flex items-center justify-center  p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 w-3/4">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 w-full">
                        Update New Car
                    </span>
                </button>

            </form>
        </div>
    </div>
    );
};

export default UpdateCar;