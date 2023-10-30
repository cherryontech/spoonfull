import logo from "../../assets/spoonfull-logo.svg";
import welcomeImg from "../../assets/welcome-img.png";

// eslint-disable-next-line react/prop-types
const WelcomePage = ({ handleSkipTutorial }) => {
    return (
        <section className="p-6 bg-background h-[100%] center-column justify-center gap-16 fixed top-0">
            <div className="center-column justify-center gap-9 px-9">
                <img src={logo} alt="spoonfull logo" />
                <img src={welcomeImg} alt="an illustration of a girl holding two big hearts" />
                <div className="center-column gap-6">
                    <h4 className="text-header4 text-center">Self-Care Made Easy</h4>
                    <p className="text-subtitle text-center">Hug your energy, thrive with balance</p>
                    <p className="text-body text-text1 text-center">Plan your day for success and self-care. We’re here to help you prioritize yourself.</p>
                </div>
            </div>
            <div className="center-column gap-4">
                <button className="btn-filled">Start Quick Tutorial</button>
                <button className="btn-outlined" onClick={handleSkipTutorial}>Skip, Dive Right in</button>
            </div>
        </section>
    )
}

export default WelcomePage;