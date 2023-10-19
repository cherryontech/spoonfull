import { useState } from "react";

const AddTaskModal = () => {
    const [task, setTask] = useState("");
    const [activeButton, setActiveButton] = useState(true)

    const handleChange = (e) => {
        if(e.target.value !== "") {
            setActiveButton(false)
        } else {
            setActiveButton(true)
        }
        setTask(e.target.value)
    }

    const onClear = (e) => {
        e.preventDefault();
        setTask("");
        setActiveButton(true);
      };

    return (
        <section className=" bg-modal-background w-[100vw] h-[100vh] flex justify-center items-center fixed inset-0">
            <article className="bg-background w-[328px] h-[221px] p-6 rounded-4xl">
                <form>
                    <h4 className="text-header4 mt-0 mb-2">Add Task</h4>
                    <div className="w-[100%] flex flex-col flex-start mb-6">
                        <label htmlFor="taskName" className="text-caption bg-background w-[80px] text-center relative inset-x-2 inset-y-2 z-10 p-x-4">Task Name</label>
                        <div className="relative">
                            <input 
                                name="taskName" 
                                type="text" 
                                id="taskName" 
                                className="border-solid border border-[#79747E] rounded h-12 text-caption p-4 w-[100%]"
                                placeholder="Type the name of your task"
                                value={task}
                                onChange={handleChange}
                            />
                            <div className="absolute top-[25%] right-2">
                            <button onClick={onClear}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12.5 2C6.97 2 2.5 6.47 2.5 12C2.5 17.53 6.97 22 12.5 22C18.03 22 22.5 17.53 22.5 12C22.5 6.47 18.03 2 12.5 2ZM12.5 20C8.09 20 4.5 16.41 4.5 12C4.5 7.59 8.09 4 12.5 4C16.91 4 20.5 7.59 20.5 12C20.5 16.41 16.91 20 12.5 20ZM12.5 10.59L16.09 7L17.5 8.41L13.91 12L17.5 15.59L16.09 17L12.5 13.41L8.91 17L7.5 15.59L11.09 12L7.5 8.41L8.91 7L12.5 10.59Z" fill="#0F0129"/>
                                </svg>
                            </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end gap-2">
                        <button className="btn-modal">Cancel</button>
                        <button disabled={activeButton} className="btn-modal">Add</button>
                    </div>
                </form>
            </article>
        </section>
    )
}
export default AddTaskModal;