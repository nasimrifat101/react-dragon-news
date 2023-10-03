import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
  return (
    <div className="flex bg-gray-100 p-3 pr-10 mt-5">
      <button className="bg-red-500 text-white w-40 p-3">Latest</button>
      <Marquee pauseOnHover={true} speed={100} className="text-black">
        <Link to='/'className="mr-5">
          {" "}
          Match Highlights: Argentina vs Ecuador   ||
        </Link>
        <Link to='/'className="mr-5">
          {" "}
          Match Highlights: Germany vs Brazil — Shocking reasult   ||
        </Link>
       
      </Marquee>
    </div>
  );
};

export default BreakingNews;
