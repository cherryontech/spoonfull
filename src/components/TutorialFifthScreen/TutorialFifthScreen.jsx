

const TutorialFifthScreen = () => {
    return(
        <section className="center-column gap-6 self-center text-center">
            <h4 className="text-header4">Key Points to Know</h4>
            <div className="flex flex-col justify-start gap-8">
                <div className="flex flex-col justify-start gap-2">
                    <div className="flex gap-4 justify-start items-start">
                        <div className="relative">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M11.9997 2.75184C18.6567 -4.09116 35.3007 7.88334 11.9997 23.2808C-11.3013 7.88484 5.34267 -4.09116 11.9997 2.75184Z" fill="#F7559E"/>
                            </svg>
                            <p className="text-white text-caption absolute top-0 left-[30%]">1</p>
                        </div>
                        <div className="flex-col justify-start items-start gap-4 w-[264px]">
                            <p className="text-body text-text1 text-start">Task Management:</p>
                            <ul className="list-disc list-outside text-start pl-4">
                                <li className="my-4">You can <span className="font-bold">edit</span>, <span className="font-bold">delete</span>, and mark tasks as <span className="font-bold">complete</span>.</li>
                                <li className="my-4">Click on <span className="font-bold">“Clear All”</span> to clear old tasks and start a <span className="font-bold">new day</span>.</li>
                            </ul>
                        </div> 
                    </div>
                </div>
                <div className="flex flex-col justify-start gap-2">
                    <div className="flex gap-4 justify-start items-start">
                        <div className="relative">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M11.9997 2.75184C18.6567 -4.09116 35.3007 7.88334 11.9997 23.2808C-11.3013 7.88484 5.34267 -4.09116 11.9997 2.75184Z" fill="#F7559E"/>
                            </svg>
                            <p className="text-white text-caption absolute top-0 left-[30%]">2</p>
                        </div>
                        <div className="flex-col justify-start items-start gap-4 w-[264px]">
                            <p className="text-body text-text1 text-start">Local Task Storage:</p>
                            <ul className="list-disc list-outside text-start pl-4">
                                <li className="my-4">Tasks <span className="font-bold">stored locally</span> for quick access.</li>
                                <li className="my-4">Exclusive to <span className="font-bold">this device and browser</span>.</li>
                                <li className="my-4">Your <span className="font-bold">private</span> task haven.</li>
                            </ul>
                        </div> 
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TutorialFifthScreen;