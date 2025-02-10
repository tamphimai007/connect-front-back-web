import { useNavigate } from "react-router";
import useAuthStore from "../store/auth-store";
import { createAlert } from "../utils/createAlert";
const Logout = () => {
  // JS
  const navigate = useNavigate();
  const actionLogout = useAuthStore((state) => state.actionLogout);

  const hdlLogout = () => {
    // code body
    actionLogout();
    createAlert("success", "Logout Success");

    navigate("/login");
  };
  return (
    <div>
      <button className="hover:cursor-pointer" onClick={hdlLogout}>
        Logout
      </button>
    </div>
  );
};
export default Logout;
