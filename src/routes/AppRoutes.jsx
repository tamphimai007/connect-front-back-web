import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import About from "../pages/About";
import HomeUser from "../pages/user/HomeUser";
import Dashboard from "../pages/admin/Dashboard";
import Manage from "../pages/admin/Manage";
import MapUser from "../pages/user/MapUser";
import Layout from "../layouts/Layout";
import LayoutAdmin from "../layouts/LayoutAdmin";
import NotFound from "../pages/NotFound";
import Register1 from "../pages/auth/Register1";
import Login from "../pages/auth/Login";
import ProtectRoute from "./ProtectRoute";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        {/* Public */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="register" element={<Register1 />} />
          <Route path="login" element={<Login />} />
        </Route>

        {/* Private */}
        <Route
          path="user"
          element={<ProtectRoute el={<Layout />} allows={["USER", "ADMIN"]} />}
        >
          <Route index element={<HomeUser />} />
          <Route path="/user/map" element={<MapUser />} />
        </Route>

        <Route
          path="admin"
          element={<ProtectRoute el={<LayoutAdmin />} allows={["ADMIN"]} />}
        >
          <Route index element={<Dashboard />} />
          <Route path="manage" element={<Manage />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
export default AppRoutes;
