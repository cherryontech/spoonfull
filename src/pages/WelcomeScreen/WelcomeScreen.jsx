import logo from "../../assets/spoonfull-logo.svg";
import animation from "../../assets/personal growth.gif";
import { Link } from "react-router-dom";

const WelcomeScreen = () => {
  return (
    <section className="w-full h-[100vh] flex flex-row justify-center items-center gap-4">
      <div className="flex flex-col justify-center items-center gap-4 lg:gap-20">
        <div className="flex flex-col justify-center items-center gap-4">
          <img src={logo} className="w-[124px]" />
          <p className="text-small-body text-500">
            Your energy mindfullness tool
          </p>
        </div>
        <img src={animation} className="lg:hidden" />
        <div className="flex flex-col justify-center items-center gap-4">
          <Link to="/login">
            <button className="btn-filled">Log In</button>
          </Link>
          <Link to="/signup">
            <button className="btn-outlined">New here? Sign up!</button>
          </Link>
        </div>
      </div>
      <img src={animation} className="hidden lg:flex" />
    </section>
  );
};

export default WelcomeScreen;
