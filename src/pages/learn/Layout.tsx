import { Outlet } from "react-router";
import LearnSide from "../../LearnSide";
import Navbar from "../../navbar";

const Layout = () => {
  return (
    <div className="learn-layout">
      <LearnSide />
      <div>
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
