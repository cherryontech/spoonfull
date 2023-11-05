import taskImg from "../../assets/tut-fourth-task.png";


// eslint-disable-next-line react/prop-types
const TutorialFourthScreen = () => {

    return (
        <section className="center-column gap-6 text-center py-8">
            <h4 className="text-header4">Customize your tasks</h4>
            <p className="text-body text-text1 w-[256px]">A modal appears for task details when you click “Add Task” as shown below</p>
            <div>
                <div className="flex justify-start items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="35" viewBox="0 0 34 35" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M18.2508 18.6791L8.60447 19.7921C8.27704 19.8301 7.94528 19.7984 7.63098 19.6991C7.31667 19.5998 7.02693 19.4351 6.78079 19.2158C6.53464 18.9966 6.33766 18.7278 6.20278 18.427C6.0679 18.1262 5.99817 17.8003 5.99817 17.4707C5.99817 17.1411 6.0679 16.8152 6.20278 16.5144C6.33766 16.2136 6.53464 15.9448 6.78079 15.7256C7.02693 15.5063 7.31667 15.3416 7.63098 15.2423C7.94528 15.143 8.27704 15.1113 8.60447 15.1493L18.2508 16.2623C18.7713 14.9343 20.1261 13.4706 22.4998 13.4699C23.936 13.4706 25.2611 13.9019 26.2496 14.585C27.2113 15.2497 27.9997 16.2658 27.9997 17.4707C28.0004 18.6749 27.2113 19.6917 26.2503 20.3557C25.2618 21.0388 23.936 21.4708 22.4998 21.4701C20.1247 21.4708 18.7713 20.0071 18.2508 18.6791Z" fill="#23A1AF"/>
                    </svg>
                    <p className="text-body text-text1">Enter Task Name</p>
                </div>
                <div className="flex justify-start items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="35" viewBox="0 0 34 35" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M18.2508 18.6791L8.60447 19.7921C8.27704 19.8301 7.94528 19.7984 7.63098 19.6991C7.31667 19.5998 7.02693 19.4351 6.78079 19.2158C6.53464 18.9966 6.33766 18.7278 6.20278 18.427C6.0679 18.1262 5.99817 17.8003 5.99817 17.4707C5.99817 17.1411 6.0679 16.8152 6.20278 16.5144C6.33766 16.2136 6.53464 15.9448 6.78079 15.7256C7.02693 15.5063 7.31667 15.3416 7.63098 15.2423C7.94528 15.143 8.27704 15.1113 8.60447 15.1493L18.2508 16.2623C18.7713 14.9343 20.1261 13.4706 22.4998 13.4699C23.936 13.4706 25.2611 13.9019 26.2496 14.585C27.2113 15.2497 27.9997 16.2658 27.9997 17.4707C28.0004 18.6749 27.2113 19.6917 26.2503 20.3557C25.2618 21.0388 23.936 21.4708 22.4998 21.4701C20.1247 21.4708 18.7713 20.0071 18.2508 18.6791Z" fill="#23A1AF"/>
                    </svg>
                    <p className="text-body text-text1">Enter the number of spoons</p>
                </div>
                <div className="flex justify-start items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="35" viewBox="0 0 34 35" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M18.2508 18.6791L8.60447 19.7921C8.27704 19.8301 7.94528 19.7984 7.63098 19.6991C7.31667 19.5998 7.02693 19.4351 6.78079 19.2158C6.53464 18.9966 6.33766 18.7278 6.20278 18.427C6.0679 18.1262 5.99817 17.8003 5.99817 17.4707C5.99817 17.1411 6.0679 16.8152 6.20278 16.5144C6.33766 16.2136 6.53464 15.9448 6.78079 15.7256C7.02693 15.5063 7.31667 15.3416 7.63098 15.2423C7.94528 15.143 8.27704 15.1113 8.60447 15.1493L18.2508 16.2623C18.7713 14.9343 20.1261 13.4706 22.4998 13.4699C23.936 13.4706 25.2611 13.9019 26.2496 14.585C27.2113 15.2497 27.9997 16.2658 27.9997 17.4707C28.0004 18.6749 27.2113 19.6917 26.2503 20.3557C25.2618 21.0388 23.936 21.4708 22.4998 21.4701C20.1247 21.4708 18.7713 20.0071 18.2508 18.6791Z" fill="#23A1AF"/>
                    </svg>
                    <p className="text-body text-text1">Click on “Add” to finish</p>
                </div>
            </div>
            <img src={taskImg} alt="a screenshot of adding task modal" />
        </section>
    )
}

export default TutorialFourthScreen;
