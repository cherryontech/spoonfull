import { useNavigate, useLocation } from "react-router";
import { useState } from "react";
import TutorialFirstScreen from "../TutorialFirstScreen/TutorialFirstScreen";
import TutorialSecondScreen from "../TutorialSecondScreen/TutorialSecondScreen";
import TutorialThirdScreen from "../TutorialThirdScreen/TutorialThirdScreen";
import TutorialFourthScreen from "../TutorialFourthScreen/TutorialFourthScreen";

// eslint-disable-next-line react/prop-types
const TutorialPage = ({ handleSkipTutorial, setShowTutorialPage }) => {
    const [currentScreen, setCurrentScreen] = useState(1)
    const navigate = useNavigate();
    const location = useLocation();
    const show = !location.pathname.includes("tutorial");

    const skipTutorial = (e) => {
        e.preventDefault();
        handleSkipTutorial();
        setShowTutorialPage(false);
        navigate("/")
    }

    const handleNextScreen = (e) => {
        e.preventDefault();
        const screen = currentScreen;
        const nextScreen = screen + 1;
        setCurrentScreen(nextScreen);
    }

    const handlePreviousScreen = (e) => {
        e.preventDefault();
        const screen = currentScreen;
        const previousScreen = screen - 1
        setCurrentScreen(previousScreen);
    }

    const routeChange = () => {
        let path = `/`;
        navigate(path);
    }

    return (
        <section className="bg-background md:bg-text1 center-column h-full w-full fixed top-0 overflow-scroll z-[6]">
            <div className="bg-background flex flex-col justify-between h-full md:h-[730px] w-full md:w-[500px] md:rounded-lg">
                <button className={(currentScreen >= 4 || !show) ? "btn-modal self-end mt-2 mx-4 text-background" : "btn-modal self-end mt-2 mx-4"} onClick={skipTutorial}>Skip</button>
                {
                    (currentScreen === 1) ?
                        <TutorialFirstScreen />
                        :
                        (currentScreen === 2) ?
                            <TutorialSecondScreen />
                            :
                            (currentScreen === 3) ?
                                <TutorialThirdScreen />
                                :
                                <TutorialFourthScreen />
                }

                <div className="flex justify-between items-center p-4">
                    <button
                        className={(currentScreen === 1) ? "btn-modal disabled:text-background" : "btn-modal"}
                        disabled={(currentScreen === 1) ? true : false}
                        onClick={handlePreviousScreen}
                    >
                        Back
                    </button>
                    <div className="flex justify-center gap-1">
                        {(currentScreen === 1) ?
                            <div className="w-[12px] h-[12px] bg-primary rounded-lg"></div>
                            :
                            <div className="w-[12px] h-[12px] bg-primary3 rounded-lg"></div>}
                        {(currentScreen === 2) ?
                            <div className="w-[12px] h-[12px] bg-primary rounded-lg"></div>
                            :
                            <div className="w-[12px] h-[12px] bg-primary3 rounded-lg"></div>}
                        {(currentScreen === 3) ?
                            <div className="w-[12px] h-[12px] bg-primary rounded-lg"></div>
                            :
                            <div className="w-[12px] h-[12px] bg-primary3 rounded-lg"></div>}
                        {(currentScreen === 4) ?
                            <div className="w-[12px] h-[12px] bg-primary rounded-lg"></div>
                            :
                            <div className="w-[12px] h-[12px] bg-primary3 rounded-lg"></div>}
                        {(currentScreen === 5) ?
                            <div className="w-[12px] h-[12px] bg-primary rounded-lg"></div>
                            :
                            <div className="hidden w-[12px] h-[12px] bg-primary3 rounded-lg"></div>}
                    </div>
                    {(currentScreen >= 4 && !show) ?
                        <button className="btn-modal text-primary-text" onClick={routeChange}>Home</button>
                        :
                        (currentScreen >= 4) ?
                            <button className="btn-modal text-primary-text" onClick={skipTutorial}>Start</button>
                        :
                            <button className="btn-modal text-primary-text" onClick={handleNextScreen}>Next</button>}
                </div>
            </div>
        </section>
    )
}

export default TutorialPage;
