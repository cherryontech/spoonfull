import heroImg from "../../assets/heroImg.png";

const TasksPage = () => {
    return (
        <section className="bg-background w-[100vw] h-[100vh] p-4">
            <div className="w-[100%] flex justify-between items-center border-b border-divider pb-2">
                <h4 className="text-header4">Tasks</h4>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M10 18H14V16H10V18ZM3 6V8H21V6H3ZM6 13H18V11H6V13Z" fill="#0F0129"/>
                </svg>  
            </div>
            <div className="h-[100%] flex flex-col justify-center items-center gap-4">
                <img src={heroImg} alt="a graphic with a girl standing next to big phone, managing tasks" className="w-[200px]"/>
                <h5 className="text-subtitle">Start adding your tasks!</h5>
                <p className="text-caption text-light-text text-center w-[200px]">Plan your day by adding tasks and allocating your energy among them.</p>
            </div>
        </section>
    )
}


export default TasksPage;