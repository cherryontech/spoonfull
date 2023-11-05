import { useNavigate } from "react-router";
import TutorialFourthScreen from "../TutorialFourthScreen/TutorialFourthScreen";
import TutorialFirstScreen from "../TutorialFirstScreen/TutorialFirstScreen";
import TutorialSecondScreen from "../TutorialSecondScreen/TutorialSecondScreen";


// eslint-disable-next-line react/prop-types
const TutorialPage = ({handleSkipTutorial}) => {
    const navigate = useNavigate();
    const skipTutorial = (e) => {
        e.preventDefault();
        handleSkipTutorial();
        navigate("/")
    }

    return (
        <section className="bg-background flex flex-col justify-between h-full w-full fixed top-0">
            <TutorialSecondScreen />
            <TutorialFirstScreen />
            <TutorialFourthScreen />
            <div className="flex justify-between p-4">
                <button className="btn-modal" onClick={skipTutorial}>Skip</button>
                <button className="btn-modal text-link">Next</button>
            </div>
        </section>
    )
}

export default TutorialPage;
