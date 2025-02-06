import { Outlet } from "react-router";
import MainNav from "../components/MainNav";
import Sidebar from "../components/admin/Sidebar";
import Header from "../components/admin/Header";

const LayoutAdmin = () => {
  return (
    <div
      className="flex h-screen w-screen"
    >
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <div className="p-2 m-2 bg-neutral-200 rounded-md flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default LayoutAdmin;
