import tutorialImg1 from "../../assets/tutorial-img1.png";
import gif from "../../assets/giphy.gif";


// eslint-disable-next-line react/prop-types
const TutorialThirdScreen = () => {

    return (
        <section className="center-column">
            <img src={tutorialImg1} alt="an illustration of a person standing in front of boards" className="mb-9"/>
            <div className="center-column w-[256px] md:w-[350px]">
                <h4 className="text-header4 mb-6">Add Tasks</h4>
                <p className="text-body text-text1 text-center mb-4">You can add tasks on your mind to visualize the plan for your day</p>
                <p className="text-body text-text1 text-center">That can be done by clicking on the floating “Add task” button on the Home Screen </p>
            </div>
            <img src={gif} alt="an animation of a finger clicking the button" className="w-[200px]"/>
        </section>
    )
}

export default TutorialThirdScreen;
