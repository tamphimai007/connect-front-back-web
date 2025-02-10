import { useEffect, useState } from "react";
import {
  actionDeleteUser,
  actionListUsers,
  actionUpdateRole,
} from "../../../api/user";
import useAuthStore from "../../store/auth-store";
import { Delete, DeleteIcon, Trash2 } from "lucide-react";
import { createAlert } from "../../utils/createAlert";
import Swal from "sweetalert2";

const Manage = () => {
  // JS
  const [users, setUsers] = useState([]);
  const token = useAuthStore((state) => state.token);

  useEffect(() => {
    // code
    hdlFetchUsers(token);
  }, []);

  const hdlFetchUsers = async (token) => {
    try {
      const res = await actionListUsers(token);
      setUsers(res.data.result);
    } catch (error) {
      console.log(error);
    }
  };
  const hdlUpdateRole = async (token, id, role) => {
    console.log(token, id, role);
    try {
      const res = await actionUpdateRole(token, { id, role });
      console.log(res);
      createAlert("success", res.data.message);
      hdlFetchUsers(token);
    } catch (error) {
      console.log(error);
      createAlert("success", error.response.data.message);
    }
  };
  const hdlDeleteUser = async (token, id) => {
    try {
      console.log(id);
      Swal.fire({
        icon: "info",
        text: "Are you Sure?",
        showCloseButton: true,
        showCancelButton: true,
      }).then(async (data) => {
        // console.log(data.isConfirmed);
        if (data.isConfirmed) {
          const res = await actionDeleteUser(token, id);
          console.log(res);
          createAlert("success", res.data.message);
          hdlFetchUsers(token);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(users);
  return (
    <div>
      <table className="w-full">
        <thead>
          <tr>
            <th>No.</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.firstname}</td>
                <td>{user.lastname}</td>
                <td>{user.email}</td>
                <td>
                  <select
                    defaultValue={user.role}
                    onChange={(e) =>
                      hdlUpdateRole(token, user.id, e.target.value)
                    }
                  >
                    <option>USER</option>
                    <option>ADMIN</option>
                  </select>
                </td>
                <td>
                  <Trash2
                    color="red"
                    onClick={() => hdlDeleteUser(token, user.id)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Manage;
