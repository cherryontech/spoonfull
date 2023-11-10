import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Listbox } from '@headlessui/react'


// eslint-disable-next-line react/prop-types
const AddTaskModal = ({ setShowModal, remainingSpoons }) => {
    const [activeButton, setActiveButton] = useState(true);
    const [taskName, setTaskName] = useState('');
    const [spoons, setSpoons] = useState("");
    const [selectedPriority, setSelectedPriority] = useState("Priority")
    
    const backgroundColors = {
        High: "primary1",
        Medium: "primary3",
        Low: "primary4",
    }
   
    
    const handleChangeTask = (e) => {
        let newTask = e.target.value
        newTask = newTask.replaceAll("  ", " ");
        if(newTask !== "" && newTask !== " ") {
            setActiveButton(false)
        } else {
            setActiveButton(true)
        }
        setTaskName(newTask);
    }

    const handleChangeSpoons = (e) => {
        if( (remainingSpoons - e.target.value) < 0) {
            toast.error("You don't have enough spoons available.")
        }

        if(e.target.value > remainingSpoons) {
            setActiveButton(true)
        } else {
            setActiveButton(false)
        }

        if (e.target.value === "") {
            setSpoons(0)
        } else {
            setSpoons(e.target.value);   
        }
    }

    const newTask = {
        id: Date.now(),
        task: taskName,
        spoons: Number(spoons),
        checked: false,
        priority: selectedPriority,
    }

    const handleClear = (e) => {
        e.preventDefault();
        setTaskName('');
        setActiveButton(true);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' 
            && taskName !== "" 
            && (remainingSpoons - spoons) >= 0 
            && taskName !== " ") {
          handleSubmit();
          window.location.reload()
        }
    }

    const handleSubmit = () => {
            let tasks = localStorage["tasks"];
            tasks = JSON.parse(tasks);
            tasks.push(newTask);
            localStorage["tasks"] = JSON.stringify(tasks);
    }

    return (
        <section className=" bg-text2 w-[100vw] h-[100vh] flex justify-center items-center fixed top-0" onClick={() => setShowModal(false)}>
            <ToastContainer 
                position="top-center" 
                theme="light" 
                hideProgressBar={true} 
                limit={1} 
                role="alert"
            />
            <article className="bg-background w-[328px] p-6 rounded-4xl" onClick={e => e.stopPropagation()}>
                <form onSubmit={handleSubmit}>
                    <h4 className="text-header4 mt-0 mb-2">Add Task</h4>
                    <div className="w-[100%] flex flex-col flex-start mb-6">
                        <label htmlFor="taskName" className="text-caption bg-background w-[80px] text-center relative inset-x-2 inset-y-2 z-10 p-x-4">Task Name<span className="absolute text-2 top-0 right-0">*</span></label>
                        <div className="relative">
                            <input 
                                name="task" 
                                type="text" 
                                id="task" 
                                className="border-solid border border-[#79747E] rounded h-12 text-caption p-4 pr-10 w-[100%]"
                                placeholder="Type the name of your task"
                                value={taskName}
                                onChange={handleChangeTask}
                                onKeyDown={handleKeyDown}
                                required
                            />
                            <div className="absolute top-3 right-2">
                                <button onClick={handleClear}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M12.5 2C6.97 2 2.5 6.47 2.5 12C2.5 17.53 6.97 22 12.5 22C18.03 22 22.5 17.53 22.5 12C22.5 6.47 18.03 2 12.5 2ZM12.5 20C8.09 20 4.5 16.41 4.5 12C4.5 7.59 8.09 4 12.5 4C16.91 4 20.5 7.59 20.5 12C20.5 16.41 16.91 20 12.5 20ZM12.5 10.59L16.09 7L17.5 8.41L13.91 12L17.5 15.59L16.09 17L12.5 13.41L8.91 17L7.5 15.59L11.09 12L7.5 8.41L8.91 7L12.5 10.59Z" fill="#0F0129"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="pb-6">
                        <div className="flex items-center gap-2 mb-2">
                            <h5 className="text-subtitle">Assign spoons</h5>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M11 17H13V11H11V17ZM12 9C12.2833 9 12.521 8.904 12.713 8.712C12.905 8.52 13.0007 8.28267 13 8C13 7.71667 12.904 7.479 12.712 7.287C12.52 7.095 12.2827 6.99933 12 7C11.7167 7 11.479 7.096 11.287 7.288C11.095 7.48 10.9993 7.71733 11 8C11 8.28333 11.096 8.521 11.288 8.713C11.48 8.905 11.7173 9.00067 12 9ZM12 22C10.6167 22 9.31667 21.7373 8.1 21.212C6.88333 20.6867 5.825 19.9743 4.925 19.075C4.025 18.175 3.31267 17.1167 2.788 15.9C2.26333 14.6833 2.00067 13.3833 2 12C2 10.6167 2.26267 9.31667 2.788 8.1C3.31333 6.88333 4.02567 5.825 4.925 4.925C5.825 4.025 6.88333 3.31267 8.1 2.788C9.31667 2.26333 10.6167 2.00067 12 2C13.3833 2 14.6833 2.26267 15.9 2.788C17.1167 3.31333 18.175 4.02567 19.075 4.925C19.975 5.825 20.6877 6.88333 21.213 8.1C21.7383 9.31667 22.0007 10.6167 22 12C22 13.3833 21.7373 14.6833 21.212 15.9C20.6867 17.1167 19.9743 18.175 19.075 19.075C18.175 19.975 17.1167 20.6877 15.9 21.213C14.6833 21.7383 13.3833 22.0007 12 22Z" fill="black"/>
                            </svg>
                        </div>
                        <div className="flex gap-2 justify-between items-center">
                            <div className="flex gap-2 p-2 justify-between items-center border-[0.4px] rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12.0301 13.7391L4.42206 7.70506C4.16367 7.50039 3.9515 7.24338 3.79949 6.9509C3.64747 6.65842 3.55905 6.33709 3.54003 6.00801C3.521 5.67893 3.57181 5.34955 3.68911 5.04151C3.80641 4.73346 3.98754 4.4537 4.22062 4.22062C4.4537 3.98754 4.73346 3.80641 5.04151 3.68911C5.34955 3.57181 5.67893 3.521 6.00801 3.54003C6.33709 3.55905 6.65842 3.64747 6.9509 3.79949C7.24338 3.9515 7.50039 4.16367 7.70506 4.42206L13.7391 12.0301C15.0461 11.4591 17.0391 11.3821 18.7181 13.0601C19.7331 14.0761 20.3651 15.3181 20.5811 16.5001C20.7911 17.6501 20.6301 18.9261 19.7781 19.7781C18.9271 20.6301 17.6501 20.7911 16.5011 20.5811C15.3191 20.3651 14.0761 19.7331 13.0611 18.7171C11.3811 17.0381 11.4591 15.0461 12.0301 13.7391Z" fill="#001111" fillOpacity="0.5"/>
                                </svg>
                                <p className="text-caption">x</p>
                                <input 
                                    name="spoons"
                                    type="number"
                                    id="spoons"
                                    placeholder="00"
                                    className="text-body w-[52px] h-12 bg-primary4 p-4 rounded-lg text-center"
                                    value={spoons}
                                    onChange={handleChangeSpoons}
                                    onKeyDown={handleKeyDown}
                                />
                            </div>
                            <div className="flex justify-between gap-2">
                                <p className="text-body-small">Available Spoons:</p>
                                <p className={
                                    ((remainingSpoons - Number(spoons)) > 0)? 
                                    "text-body-small" 
                                    : 
                                    "text-body-small text-error"
                                }>{
                                    remainingSpoons - Number(spoons) 
                                }</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h5 className="text-subtitle mb-2">Assign priority</h5>
                        <Listbox value={selectedPriority} onChange={setSelectedPriority}>
                        <Listbox.Button className={`bg-${backgroundColors[selectedPriority]} w-[128px] flex justify-between items-center text-body text-text1 border-[1px] border-[#79747E] px-4 py-[10px] rounded-lg`}>
                            {selectedPriority}
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M20.625 9L12.625 17L4.625 9L6.625 7L12.625 13L18.625 7L20.625 9Z" fill="#001111" fillOpacity="0.75"/>
                            </svg>
                        </Listbox.Button>
                                <Listbox.Options>
                                    <Listbox.Option value="High" className="bg-primary1">High</Listbox.Option>
                                    <Listbox.Option value="Medium" className="bg-primary3">Medium</Listbox.Option>
                                    <Listbox.Option value="Low" className="bg-primary4">Low</Listbox.Option>
                                </Listbox.Options>
                        </Listbox>
                    </div>
                    <div className="flex justify-end gap-2">
                        <button type="submit" className="btn-modal" onClick={() => setShowModal(false)}>Cancel</button>
                        <button disabled={activeButton} className="btn-modal text-primary-text">Add</button>
                    </div>
                </form>
            </article>
        </section>
    )
}

export default AddTaskModal;