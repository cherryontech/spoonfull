import logo from "../../assets/spoonfull-logo.svg";
import welcomeImg from "../../assets/welcome-img.png";

const WelcomePage = () => {
    return (
        <section className="p-6 flex flex-col items-center gap-16">
            <div className="flex flex-col justify-center items-center gap-9 px-9">
                <img src={logo} alt="spoonfull logo" />
                <img src={welcomeImg} alt="an illustration of a girl holding two big hearts" />
                <div className="flex flex-col items-center gap-6">
                    <h4 className="text-header4 text-center">Self-Care Made Easy</h4>
                    <p className="text-subtitle text-center">Hug your energy, thrive with balance</p>
                    <p className="text-body text-text1 text-center">Plan your day for success and self-care. We’re here to help you prioritize yourself.</p>
                </div>
            </div>
            <div className="flex flex-col items-center gap-4">
                <button className="btn-filled">Start Quick Tutorial</button>
                <button className="btn-outlined">Skip, Dive Right in</button>
            </div>
        </section>
    )
}

export default WelcomePage;