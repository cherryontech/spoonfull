/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";

const InputField = ({ name, label, type }) => {
  const { register } = useForm();

  return (
    <div className="mt-4">
      <label>{label}</label>
      <input
        {...register(name, {
          required: true,
          message: "This field is required",
        })}
        className="text-body w-full h-12 mt-2 p-4 rounded border-border border"
        type={type}
      />
    </div>
  );
};

export default InputField;
