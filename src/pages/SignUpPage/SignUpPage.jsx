import { useForm } from "react-hook-form";
import InputField from "/src/components/InputField/InputField";
import Logo from "/src/assets/spoonfull-logo.svg";
import { Checkbox } from "@mui/material";
import PasswordInputField from "../../components/PasswordInputField/PasswordInputField";

const SignUpPage = () => {
  const {
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      email: "",
      password: "",
    },
  });

  return (
    <div className="w-full h-[100vh] flex flex-col justify-center items-center p-8">
      <img src={Logo} alt="spoonful logo" className="w-[140px] pb-2" />
      <h4 className="text-subtitle self-start">Sign up</h4>
      <form onSubmit={handleSubmit} className="flex flex-col w-full gap-2">
        <InputField name="firstName" label="Name" />
        {errors.firstName?.message}
        <InputField name="email" label="Email Address" />
        {errors.email?.message}
        <PasswordInputField />
        {errors.password?.message}
        <p className="text-text3 text-caption text-center">
          Must be 8 or more characters and contain at least 1 number and 1
          special character.
        </p>
        <div className="flex items-center">
          <Checkbox />
          <p>Remember me</p>
        </div>
        <button className="btn-filled w-full my-4">SIGN UP</button>
      </form>
      <div className="border border-[0.5px] border-text3 w-full relative my-8">
        <h4 className="border rounded border-text3 text-text2 text-bold-body text-center w-10 h-9 block pt-1 absolute left-[50%] bottom-[-17px] ml-[-17px] bg-white">
          OR
        </h4>
      </div>
      <div className="flex justify-between w-[156px] m-4">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg"
          className="w-[24px]"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg"
          className="w-[24px]"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/facebook/facebook-original.svg"
          className="w-[24px]"
        />
      </div>
      <p className="text-caption mt-4">
        Already a user?{" "}
        <a href="/login" className="text-primary">
          {" "}
          Login
        </a>
      </p>
    </div>
  );
};

export default SignUpPage;
