import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftNav from "../Shared/LeftNav/LeftNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightNav from "../Shared/RightNav/RightNav";
import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard";

const Home = () => {
  const news = useLoaderData();
  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>
      <div className="grid lg:grid-cols-4 gap-5">
        <div className="">
          <LeftNav></LeftNav>
        </div>
        <div className="lg:col-span-2">
          <h2 className="text-xl font-bold">Dragon News Home</h2>
          {
            news.map(aNews => <NewsCard key={aNews.key} news={aNews}></NewsCard>)
          }
        </div>
        <div className="">
          <RightNav></RightNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
