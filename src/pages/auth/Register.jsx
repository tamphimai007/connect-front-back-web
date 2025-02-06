import axios from "axios";
import { useState } from "react";
import { createAlert } from "../../utils/createAlert";

const Register = () => {
  const [value, setValue] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const hdlOnchange = (e) => {
    // console.log(e.target.name, e.target.value);
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const hdlSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/api/register", value);
      createAlert("success", "Register Success");
    } catch (error) {
      createAlert("info", error.response?.data?.message);
    }
  };

  return (
    <div className="flex w-full h-full justify-end">
      {/* Card */}
      <div className="w-64 h-full p-4 rounded-md shadow-md border">
        <h1 className="text-xl font-bold text-emerald-900 text-center">
          Register
        </h1>
        {/* Form */}
        <form onSubmit={hdlSubmit}>
          <div className="flex flex-col px-2 py-4 gap-4">
            <input
              className="w-full border border-gray-400 
              rounded-md p-1 px-4"
              type="text"
              name="firstname"
              placeholder="First Name"
              onChange={hdlOnchange}
            />
            <input
              className="w-full border border-gray-400 
              rounded-md p-1 px-4"
              type="text"
              name="lastname"
              placeholder="Last Name"
              onChange={hdlOnchange}
            />
            <input
              className="w-full border border-gray-400 
              rounded-md p-1 px-4"
              type="text"
              name="email"
              placeholder="Email"
              onChange={hdlOnchange}
            />

            <input
              className="w-full border border-gray-400 
              rounded-md p-1 px-4"
              type="text"
              name="password"
              placeholder="Password"
              onChange={hdlOnchange}
            />

            <input
              className="w-full border border-gray-400 
              rounded-md p-1 px-4"
              type="text"
              name="confirmPassword"
              placeholder="Confirm Password"
              onChange={hdlOnchange}
            />
          </div>

          <div className="flex justify-center">
            <button
              className="bg-green-900 text-green-100 px-2 
            py-1 rounded-md hover:cursor-pointer "
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Register;
