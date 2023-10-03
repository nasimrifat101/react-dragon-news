import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div>
            <h3 className="text-[300px] font-black text-red-400 text-center">404</h3>
            <h2 className="text-3xl font-semibold text-red-500 text-center -mt-20">Page Not Found</h2>
            <p className="text-center mt-10 font-semibold">Go <span className="text-green-400"><Link to='/'>Home</Link></span></p>
        </div>
    );
};

export default Error;