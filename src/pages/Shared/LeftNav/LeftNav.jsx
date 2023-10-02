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
    <div className="space-y-6 p-3">
      <div className="text-2xl">All Catagories</div>
      {
        cata.map(cat => <Link className="block ml-4 text-xl font-semibold" key={cat.id}>{cat.name}</Link>)
      }
    </div>
  );
};

export default LeftNav;
