import { useForm } from "react-hook-form";
import InputField from "/src/components/InputField/InputField";
import Logo from "/src/assets/spoonfull-logo.svg";
import { Checkbox } from "@mui/material";
import PasswordInputField from "../../components/PasswordInputField/PasswordInputField";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { startCase, capitalize } from "lodash";
import { useNavigate } from "react-router";
import { useLocalStorage } from "../../utils/hooks/useLocalStorage";

const SignUpPage = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const [rememberMe, setRememberMe] = useState(false);
  const { setItem } = useLocalStorage("isLoggedIn");
  const auth = getAuth();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const { email, password } = data;
      await createUserWithEmailAndPassword(auth, email, password);
      setItem(rememberMe);
      toast.success("User signed up successfully");
      setTimeout(() => navigate("/"), 3000);
    } catch (error) {
      const message = startCase(error.message).replace("Firebase ", "");
      toast.error(`${capitalize(message)}`);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="w-full max-w-[420px] flex flex-col justify-center items-center p-8 overflow-y-scroll">
        <ToastContainer />
        <img src={Logo} alt="spoonful logo" className="w-[140px] pb-2" />
        <h4 className="text-subtitle self-start">Sign up</h4>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col w-full gap-2"
        >
          <InputField name="firstName" label="Name" register={register} />
          {errors.firstName && (
            <span className="text-error">{errors.firstName.message}</span>
          )}
          <InputField
            name="email"
            label="Email Address"
            type="email"
            register={register}
          />
          {errors.email && (
            <span className="text-error">{errors.email.message}</span>
          )}
          <PasswordInputField register={register} />
          {errors.password && (
            <span className="text-error">{errors.password.message}</span>
          )}
          {!errors.password && (
            <p className="text-text3 text-caption text-center">
              Must be 8 or more characters and contain at least 1 number and 1
              special character.
            </p>
          )}
          <div className="flex items-center">
            <Checkbox
              data-testid="remember-me-checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <p>Remember me</p>
          </div>
          <button className="btn-filled w-full my-4" type="submit">
            SIGN UP
          </button>
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
            src="https://upload.wikimedia.org/wikipedia/commons/2/25/Microsoft_icon.svg"
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
    </div>
  );
};

export default SignUpPage;
