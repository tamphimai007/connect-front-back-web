// rafce
const FormInput = ({ register, name, errors, type = "text" }) => {
  // console.log(errors[name]);
  return (
    <div>
      <input
        className="w-full border border-gray-400 
      rounded-md p-1 px-4"
        type={type}
        name={name}
        {...register(name)}
        placeholder={name}
      />
      {errors[name] && (
        <p className="text-red-500 text-sm">{errors[name].message}</p>
      )}
    </div>
  );
};
export default FormInput;
