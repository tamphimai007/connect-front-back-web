import { createAlert } from "../../utils/createAlert";
import { useForm } from "react-hook-form";
import FormInput from "../../components/form/FormInput";
import Buttons from "../../components/form/Buttons";
import { useNavigate } from "react-router";

import { actionLogin } from "../../../api/auth";
import { loginSchema } from "../../utils/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import useAuthStore from "../../../store/auth-store";

const Login = () => {
  // Zustand
  const actionLogin_ = useAuthStore((state) => state.actionLogin_);
  const navigate = useNavigate();
  const { register, handleSubmit, formState, reset } = useForm({
    resolver: zodResolver(loginSchema),
  });
  const { isSubmitting, errors } = formState;
  //   console.log(errors.password?.message);
  const hdlSubmit = async (value) => {
    // await new Promise((resolve) => setTimeout(resolve, 3000));

    const res = await actionLogin_(value);
    console.log(res);
    if (res.success) {
      roleRedirect(res.role);
      createAlert("success", "Login Success");
    } else {
      createAlert("info", res.error);
    }
  };

  const roleRedirect = (role) => {
    // console.log(role);
    if (role === "ADMIN") {
      navigate("/admin");
    } else {
      navigate("/user");
    }
  };

  return (
    <div className="flex w-full h-full justify-end">
      {/* Card */}
      <div className="w-64 h-full p-4 rounded-md shadow-md border">
        <h1 className="text-xl font-bold text-emerald-900 text-center">
          Login
        </h1>
        {/* Form */}
        <form onSubmit={handleSubmit(hdlSubmit)}>
          <div className="flex flex-col px-2 py-4 gap-4">
            <FormInput register={register} name="email" errors={errors} />
            <FormInput
              register={register}
              type="password"
              name="password"
              errors={errors}
            />
          </div>

          <div className="flex justify-center">
            <Buttons isSubmitting={isSubmitting} label="Login" />
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
