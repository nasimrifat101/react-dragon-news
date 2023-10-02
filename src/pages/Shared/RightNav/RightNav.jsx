import { BsFacebook, BsGithub, BsGoogle, BsInstagram, BsTwitter } from "react-icons/bs";

const RightNav = () => {
    return (
        <div>
            <div className="p-3 space-y-3 mb-6">
                <h2 className="text-3xl">Login With</h2>
                <button className="btn btn-outline w-full ">
                    <BsGoogle></BsGoogle>
                    Google
                </button>
                <button className="btn btn-outline w-full ">
                    <BsGithub></BsGithub>
                    Github
                </button>
            </div>
            {/* find us on */}
            <div className="p-3 mb-6">
                <h2 className="text-3xl">Find Us On</h2>
               <a className="p-4 mt-4 flex text-lg items-center border-2 rounded-t-lg" href="">
                <BsFacebook className="mr-3"></BsFacebook>
                Facebook
               </a>
               <a className="p-4 flex text-lg items-center border-2" href="">
                <BsTwitter className="mr-3"></BsTwitter>
                Twitter
               </a>
               <a className="p-4 flex text-lg items-center border-2 rounded-b-lg" href="">
                <BsInstagram className="mr-3"></BsInstagram>
                Instagram
               </a>
            </div>
        </div>
    );
};

export default RightNav;