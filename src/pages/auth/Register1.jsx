import { createAlert } from "../../utils/createAlert";
import { useForm } from "react-hook-form";
import FormInput from "../../components/form/FormInput";
import Buttons from "../../components/form/Buttons";

import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../../utils/schemas";
import { actionRegister } from "../../../api/auth";

const Register1 = () => {
  const { register, handleSubmit, formState, reset } = useForm({
    resolver: zodResolver(registerSchema),
  });
  const { isSubmitting, errors } = formState;
  //   console.log(errors.password?.message);
  const hdlSubmit = async (value) => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    try {
      const res = await actionRegister(value);
      createAlert("success", "Register Success");
      reset();
    } catch (error) {
      createAlert("info", error.response?.data?.message);
    }
  };
  // backgroundImage: `url(${Background})`
  return (
    <div className="flex w-full h-full justify-end">
      {/* Card */}
      <div className="w-64 h-full p-4 rounded-md shadow-md border">
        <h1 className="text-xl font-bold text-emerald-900 text-center">
          Register1
        </h1>
        {/* Form */}
        <form onSubmit={handleSubmit(hdlSubmit)}>
          <div className="flex flex-col px-2 py-4 gap-4">
            <FormInput register={register} name="firstname" errors={errors} />
            <FormInput register={register} name="lastname" errors={errors} />
            <FormInput register={register} name="email" errors={errors} />
            <FormInput
              register={register}
              type="password"
              name="password"
              errors={errors}
            />
            <FormInput
              register={register}
              type="password"
              name="confirmPassword"
              errors={errors}
            />
          </div>

          <div className="flex justify-center">
            <Buttons isSubmitting={isSubmitting} label="Register" />
          </div>
        </form>
      </div>
    </div>
  );
};
export default Register1;
