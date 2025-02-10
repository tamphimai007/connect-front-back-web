import axios from "axios";

export const actionListUsers = (token) => {
  return axios.get("http://localhost:8000/api/users", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
export const actionUpdateRole = (token, value) => {
  return axios.patch("http://localhost:8000/api/user/update-role", value, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const actionDeleteUser = (token, id) => {
  return axios.delete("http://localhost:8000/api/user/" + id, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
