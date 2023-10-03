import { BsFacebook, BsGithub, BsGoogle, BsInstagram, BsTwitter } from "react-icons/bs";
import qz1 from '../../../assets/qZone1.png'
import qz2 from '../../../assets/qZone2.png'
import qz3 from '../../../assets/qZone3.png'

const RightNav = () => {
    return (
        <div>
            <div className="p-3 space-y-3 mb-6">
                <h2 className="text-xl font-bold">Login With</h2>
                <button className="btn btn-outline w-full hover:text-blue-400 ">
                    <BsGoogle></BsGoogle>
                    Google
                </button>
                <button className="btn btn-outline w-full hover:text-blue-400">
                    <BsGithub></BsGithub>
                    Github
                </button>
            </div>
            {/* find us on */}
            <div className="p-3 mb-6">
                <h2 className="text-xl font-bold">Find Us On</h2>
               <a className="p-4 mt-4 flex text-lg items-center border-2 rounded-t-lg hover:text-blue-400" href="">
                <BsFacebook className="mr-3"></BsFacebook>
                Facebook
               </a>
               <a className="p-4 flex text-lg items-center border-x-2 hover:text-yellow-400" href="">
                <BsTwitter className="mr-3"></BsTwitter>
                Twitter
               </a>
               <a className="p-4 flex text-lg items-center border-2 rounded-b-lg hover:text-red-400" href="">
                <BsInstagram className="mr-3"></BsInstagram>
                Instagram
               </a>
            </div>
            {/* q zone */}
            <div className="p-4 space-y-3 mb-6 bg-gray-200 rounded-lg">
                <h2 className="text-2xl font-semibold">Q Zone</h2>
                <img src={qz1} alt="" />
                <img src={qz2} alt="" />
                <img src={qz3} alt="" />

            </div>
            {/* banner */}
            <div>
                
            </div>

        </div>
    );
};

export default RightNav;