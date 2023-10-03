import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftNav = () => {
  const [cata, setCata] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCata(data));
  }, []);
  return (
    <div className="">
      <div className="text-xl mb-3 font-bold">All Catagories</div>
      <div className="space-y-4">
      {
        cata.map(cat => <Link className="block ml-3 text-lg font-semibold text-gray-400" key={cat.id}>{cat.name}</Link>)
      }
      </div>
    </div>
  );
};

export default LeftNav;
