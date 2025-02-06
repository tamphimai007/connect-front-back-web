import { Outlet } from "react-router";
import MainNav from "../components/MainNav";

const Layout = () => {
  return (
    <div className="container">
      <MainNav />
      <Outlet />
    </div>
  );
};
export default Layout;
