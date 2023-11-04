import firstImg from "../../assets/tut-first-img.png";
import spoons from "../../assets/tut-first-spoons.png";
import spoonBadge from "../../assets/tut-first-spoon-badge.png";
import singleSpoon from "../../assets/tut-first-single-spoon.png";

const TutorialFirstScreen = () => {
    return (
        <section className="center-column text-center self-center gap-8 py-8">
            <div className="center-column w-[256px] gap-4">
                <img src={firstImg} />
                <h4 className="text-header4">Spoon Theory, to stay mindful of your energy</h4>
                <div>
                    <p className="text-body text-text1">Think of Spoons as your Daily Energy</p>
                    <div className="flex justify-between items-center">
                        <img src={spoons} alt="illustration of teal spoons"/>
                        <p className="text-small-body">Spoons = Energy Units</p>
                    </div>
                </div>
            </div>
            <div className="px-6">
                <p className="text-body text-text1 pb-4">Everyday, you wake up with a certain number of Spoons.</p>
                <div className="flex justify-center gap-2">
                    <p className="text-small-body w-[126px]">In SpoonFull, you have 12/day</p>
                    <img src={spoonBadge} alt="an icon of a spoon with a badge"/>
                </div>
            </div>
            <div className="px-6">
                <p className="text-body text-text1 pb-4">Each task you do costs you some of your precious spoons.</p>
                <div className="flex justify-center items-center gap-2">
                    <p className="text-small-body w-[65px]">Mowing the lawn</p>
                    <img src={singleSpoon} alt="a spoon"/>
                    <p className="text-small-body">=</p>
                    <p className="text-small-body">2 Spoons spent</p>
                </div>
            </div>
        </section>
    )
}

export default TutorialFirstScreen;