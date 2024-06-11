import logo from "../../assets/spoonfull-logo.svg";
import animation from "../../assets/personal growth.gif";
import { Link } from "react-router-dom";

const WelcomeScreen = () => {
  return (
    <section className="w-full h-[100vh] flex flex-row justify-center items-center gap-4">
      <div className="flex flex-col justify-center items-center gap-8 lg:gap-10">
        <div className="flex flex-col justify-center items-center gap-4">
          <img src={logo} className="w-[124px] lg:pb-6" />
          <p className="text-small-body text-500 lg:hidden">
            Your energy mindfullness tool
          </p>
          <div className="hidden lg:flex flex-col justify-center items-center gap-4">
            <h4 className="text-header4">Welcome to SpoonFull!</h4>
            <p className="text-small-body text-500 max-w-[200px] text-center">
              SpoonFull is an easy way to track your daily energy level and
              avoid burnout.
            </p>
          </div>
        </div>
        <div className="lg:hidden w-[300px] flex flex-col justify-center items-center">
          <img src={animation} />
          <a
            href="https://storyset.com/growth"
            className="text-[10px] text-text3"
          >
            Growth illustrations by Storyset
          </a>
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
          <Link to="/login">
            <button className="btn-filled">Log In</button>
          </Link>
          <Link to="/signup">
            <button className="btn-outlined">New here? Sign up!</button>
          </Link>
        </div>
      </div>
      <div className="hidden lg:flex flex-col justify-center items-center">
        <img src={animation} />
        <a
          href="https://storyset.com/growth"
          className="text-[10px] text-text3"
        >
          Growth illustrations by Storyset
        </a>
      </div>
    </section>
  );
};

export default WelcomeScreen;
