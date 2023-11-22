import mainImg from "../../assets/tut-second-img.png";

const TutorialSecondScreen = () => {
    return (
        <section className="center-column self-center gap-8 px-4">
            <div className="center-column gap-2">
                <img src={mainImg} alt="an illustration of a happy woman holding a document"/>
                <h4 className="text-header4">Your path to a wholesome day</h4>
            </div>
            <div className="w-[280px] flex flex-col gap-8">
                <div className="flex gap-2 justify-start items-center">
                    <div className="relative">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M11.9997 2.75184C18.6567 -4.09116 35.3007 7.88334 11.9997 23.2808C-11.3013 7.88484 5.34267 -4.09116 11.9997 2.75184Z" fill="#F7559E"/>
                        </svg>
                        <p className="text-white text-caption absolute top-0 left-[30%]">1</p>
                    </div>
                    <p className="text-body text-text1">Plan your tasks</p>
                </div>
                <div className="flex gap-2 justify-start items-center">
                    <div className="relative">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M11.9997 2.75184C18.6567 -4.09116 35.3007 7.88334 11.9997 23.2808C-11.3013 7.88484 5.34267 -4.09116 11.9997 2.75184Z" fill="#F7559E"/>
                        </svg>
                        <p className="text-white text-caption absolute top-0 left-[30%]">2</p>
                    </div>
                    <p className="text-body text-text1">Assign spoons to tasks</p>
                </div>
                <div className="flex gap-2 justify-start items-start">
                    <div className="relative">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M11.9997 2.75184C18.6567 -4.09116 35.3007 7.88334 11.9997 23.2808C-11.3013 7.88484 5.34267 -4.09116 11.9997 2.75184Z" fill="#F7559E"/>
                        </svg>
                        <p className="text-white text-caption absolute top-0 left-[30%]">3</p>
                    </div>
                    <p className="text-body text-text1 mt-0">Prevent exhaustion by avoiding using spoons too quickly</p>
                </div>
            </div>
            <p className="text-bold-body text-center">Next, Let’s see how to do this on SpoonFull!</p>
        </section>
    )
}

export default TutorialSecondScreen;