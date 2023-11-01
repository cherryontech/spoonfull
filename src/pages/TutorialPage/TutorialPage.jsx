import tutorialImg1 from "../../assets/tutorial-img1.png";
import gif from "../../assets/giphy.gif";
import { useNavigate } from "react-router";


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
            <div className="center-column pt-[121px]">
                <img src={tutorialImg1} alt="an illustration of a person standing in front of boards" className="mb-9"/>
                <div className="center-column w-[256px]">
                    <h4 className="text-header4 mb-6">Add Tasks</h4>
                    <p className="text-body text-text1 text-center mb-4">You can add tasks on your mind to visualize the plan for your day</p>
                    <p className="text-body text-text1 text-center">That can be done by clicking on the floating “Add task” button on the Home Screen </p>
                </div>
                <img src={gif} alt="an animation of a finger clicking the button" className="w-[60%]"/>
            </div>
            <div className="flex justify-between p-4">
                <button className="btn-modal" onClick={skipTutorial}>Skip</button>
                <button className="btn-modal text-link">Next</button>
            </div>
        </section>
    )
}

export default TutorialPage;
