import Header from "../Shared/Header/Header";
import LeftNav from "../Shared/LeftNav/LeftNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightNav from "../Shared/RightNav/RightNav";
import BreakingNews from "./BreakingNews/BreakingNews";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>
      <div className="grid lg:grid-cols-4 gap-5">
        <div className="border-2">
          <LeftNav></LeftNav>
        </div>
        <div className="lg:col-span-2 border-2">
          <h2 className="text-4xl">News coming sooooooon</h2>
        </div>
        <div className="border-2">
          <RightNav></RightNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
