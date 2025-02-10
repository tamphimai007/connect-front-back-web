import { useEffect, useState } from "react";
import { actionCurrentUser } from "../../api/auth";
import useAuthStore from "../store/auth-store";

const ProtectRoute = ({ el, allows }) => {
  const token = useAuthStore((state) => state.token);
  //   console.log("Protect Route js");
  //   console.log(token);
  const [ok, setOk] = useState(null);

  useEffect(() => {
    // code
    console.log("Step 2 in use Effect");
    checkPermission();
  }, []);

  const checkPermission = async () => {
    try {
      const res = await actionCurrentUser(token);
      const role = res.data.result.role;
      console.log(role);
      //   if (allows.includes(role)) {
      //     setOk(true);
      //   } else {
      //     setOk(false);
      //   }
      setOk(allows.includes(role));
    } catch (error) {
      setOk(false);
      console.log(error.response.data.message);
    }
  };
  //   console.log(ok);

  if (ok === null) {
    console.log("step 1 in ok === null");
    return <h1>Loading...</h1>;
  }
  if (!ok) {
    return <h1>Unauthorize</h1>;
  }
  return el;
};
export default ProtectRoute;
