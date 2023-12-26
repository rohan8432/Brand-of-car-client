
// import { useState } from 'react';
// import { FaEye, FaEyeSlash } from 'react-icons/fa';
// import { Link } from 'react-router-dom';

// const Register = () => {

//     const [showPass, setShowPass] = useState(false);

//     return (
//         <div>
           
//             <div className="hero min-h-screen mb-6">
//                 <div>

//                     <h1 className="text-5xl font-bold my-8 text-center">Register now!</h1>
            
                    
//                 <div className="card w-full max-w-sm shadow-2xl bg-base-100">
//                         <form  className="card-body">
//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text">Your name</span>
//                                 </label>
//                                 <input type="text" name="name" placeholder="name" className="input input-bordered" required />
//                             </div>
//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text">Email</span>
//                                 </label>
//                                 <input type="email" name="email" placeholder="email" className="input input-bordered" required />
//                             </div>
//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text">Password</span>
//                                 </label>
//                                 <input type={showPass ? "text" : "password"} name="password"  placeholder="password" className="input input-bordered" required />
//                                 <span className="absolute right-14 bottom-40" onClick={() => setShowPass(!showPass)}>{
//                                 showPass ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>

//                             }</span>

//                             </div>
//                             <div className="form-control mt-6">
//                                 <button className="btn btn-outline">Register</button>
//                             </div>
//                             <p className='text-sm'>Already have an Account? Please <span className='text-blue-800 underline'><Link to="/login">Login</Link></span></p>
//                             {/* {
//                                 registerError && <p className="mt-6 text-red-600 text-sm">{registerError}</p>
//                             }
//                             {
//                                 success && <p className="mt-6 text-green-600">{success}</p>
//                             } */}
//                         </form>
//                     </div>
              
//                 </div>
//             </div> 
//         </div>
//     );
// };

// export default Register;