import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="p-5 bg-yellow-50">
            <div className="flex justify-center items-center gap-5 p-3 text-2xl">
                <div className="text-blue-600">
                    <FaFacebook></FaFacebook>
                </div>
                <div className="text-blue-500">
                    <FaTwitter></FaTwitter>
                </div>
                <div  className="text-blue-800">
                    <FaLinkedin></FaLinkedin>
                </div>
            </div>
            <p className="text-center font-poppins text-sm text-gray-500">&copy;AutoMedic 2024</p>
        </div>
    );
};

export default Footer;