import firstImg from "../../assets/tut-first-img.png";
import spoons from "../../assets/tut-first-spoons.png";
import spoonBadge from "../../assets/tut-first-spoon-badge.png";
import singleSpoon from "../../assets/tut-first-single-spoon.png";
import halfSpoons from "../../assets/tut-first-half-spoons.png";

const TutorialFirstScreen = () => {
    return (
        <section className="center-column text-center self-center gap-12 px-4">
            <div className="center-column w-[256px] gap-4">
                <h4 className="text-header4">Spoon Theory, to stay mindful of your energy</h4>
                <img src={firstImg} />
            </div>
            <div className="flex flex-col justify-center items-center text-start gap-8">
                <div className="flex justify-start items-center gap-6 w-full pl-8">
                    <div className="w-[75px]">
                        <img src={spoons} alt="illustration of teal spoons"/>
                    </div>
                    <p className="text-small-body text-text1 font-bold">Spoons = Energy Units</p>
                </div>
                <div className="flex justify-start items-center gap-6 w-full pl-8">
                    <div className="w-[75px]">
                        <img src={spoonBadge} alt="an icon of a spoon with a badge"/>
                    </div>
                    <p className="text-small-body w-[154px] text-text1 font-bold">In SpoonFull, you have 12 spoons/day</p>
                </div>
                <div className="flex justify-start items-center gap-6 w-full pl-8">
                    <div className="w-[75px]">
                        <img src={halfSpoons} alt="an icon of a spoon with a badge"/>
                    </div>
                    <p className="text-small-body w-[154px] text-text1 font-bold">Your daily activities consume spoons.</p>
                </div>
                    <div className="flex justify-start items-center gap-6 w-full pl-8">
                        <div className="w-[75px]">
                            <img src={singleSpoon} alt="a spoon"/>
                        </div>
                        <div className="flex gap-2 items-center">
                            <p className="text-small-body text-text1 font-bold w-[73px]">Task Difficulty</p>
                            <p className="text-small-body text-text1 font-bold">=</p>
                            <p className="text-small-body text-text1 font-bold pl-1 w-[96px]">Number of Spoons used</p>
                        </div>
                    </div>
                </div>
        </section>
    )
}

export default TutorialFirstScreen;