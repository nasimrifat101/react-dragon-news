/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { title, image_url,details,_id } = news;
  return (
    <div className="card w-full bg-base-100 shadow-xl my-5 border-b-2">
      <figure>
        <img
          src={image_url}
          alt="Shoes"
          className=""
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div>
            {
                details.length > 200 ? 
                <p>{details.slice(0,200)} <br /> <Link 
                to={`news/${_id}`}
                className="font-bold text-red-400">Read More...</Link></p>
                :
                <p>{details}</p>
            }
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
