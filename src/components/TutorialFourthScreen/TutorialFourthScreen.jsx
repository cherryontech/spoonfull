import taskImg from "../../assets/tut-fourth-task.png";


// eslint-disable-next-line react/prop-types
const TutorialFourthScreen = () => {

    return (
        <section className="center-column gap-4 self-center text-center">
            <h4 className="text-header4">Customize your tasks</h4>
            <p className="text-body text-text1 w-[256px]">{`After clicking "Add Task", a pop-up will appear allowing you to enter details for your task`}</p>
            <div className="flex flex-col justify-start">
                <div className="flex flex-col justify-start gap-2">
                    <div className="flex gap-2 justify-start items-center">
                        <div className="relative">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M11.9997 2.75184C18.6567 -4.09116 35.3007 7.88334 11.9997 23.2808C-11.3013 7.88484 5.34267 -4.09116 11.9997 2.75184Z" fill="#F7559E"/>
                            </svg>
                            <p className="text-white text-caption absolute top-0 left-[30%]">1</p>
                        </div>
                        <p className="text-body text-text1">Enter Task Name</p>
                    </div>
                </div>
                <div className="flex flex-col justify-start gap-2">
                    <div className="flex gap-2 justify-start items-center">
                        <div className="relative">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M11.9997 2.75184C18.6567 -4.09116 35.3007 7.88334 11.9997 23.2808C-11.3013 7.88484 5.34267 -4.09116 11.9997 2.75184Z" fill="#F7559E"/>
                            </svg>
                            <p className="text-white text-caption absolute top-0 left-[30%]">2</p>
                        </div>
                        <p className="text-body text-text1">Enter the number of spoons</p>
                    </div>
                </div>
                <div className="center-columnflex flex-col justify-start gap-2">
                    <div className="flex gap-2 justify-start items-center">
                        <div className="relative">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M11.9997 2.75184C18.6567 -4.09116 35.3007 7.88334 11.9997 23.2808C-11.3013 7.88484 5.34267 -4.09116 11.9997 2.75184Z" fill="#F7559E"/>
                            </svg>
                            <p className="text-white text-caption absolute top-0 left-[30%]">3</p>
                        </div>
                        <p className="text-body text-text1">Select priority from dropdown</p>
                    </div>
                </div>
                <div className="flex flex-col justify-start gap-2">
                    <div className="flex gap-2 justify-start items-center">
                        <div className="relative">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M11.9997 2.75184C18.6567 -4.09116 35.3007 7.88334 11.9997 23.2808C-11.3013 7.88484 5.34267 -4.09116 11.9997 2.75184Z" fill="#F7559E"/>
                            </svg>
                            <p className="text-white text-caption absolute top-0 left-[30%]">4</p>
                        </div>
                        <p className="text-body text-text1">Click on “Add” to finish</p>
                    </div>
                </div>
            </div>
            <img className="block" src={taskImg} alt="a screenshot of adding task modal" />
        </section>
    )
}

export default TutorialFourthScreen;
