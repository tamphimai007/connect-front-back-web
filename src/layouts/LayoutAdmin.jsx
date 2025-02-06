import { Outlet } from "react-router";
import MainNav from "../components/MainNav";

const LayoutAdmin = () => {
  return (
    <div className="container">
      <MainNav />
      <Outlet />
    </div>
  );
};
export default LayoutAdmin;
