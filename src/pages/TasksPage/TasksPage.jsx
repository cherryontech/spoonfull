/* eslint-disable react/prop-types */
import heroImg from "../../assets/heroImg.png";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import AddTaskModal from "../../components/AddTaskModal/AddTaskModal";
import TaskCard from "../../components/TaskCard/TaskCard";
import WelcomePage from "../WelcomePage/WelcomePage";
import TutorialPage from "../../components/TutorialPage/TutorialPage";
import { ToastContainer, toast } from 'react-toastify';


const TasksPage = ({remainingSpoons, taskList, setTaskList}) => {

    const [showModal, setShowModal] = useState(false);
    const [showWelcomePage, setShowWelcomePage] = useState(true);
    const [showTutorialPage, setShowTutorialPage] = useState(false)
    const [taskAdded, setTaskAdded] = useState(false)
    const [taskRemoved, setTaskRemoved] = useState(false)
    const [highPriorityTasks, setHighPriorityTasks] = useState([])
    const [mediumPriorityTasks, setMediumPriorityTasks] = useState([])
    const [lowPriorityTasks, setLowPriorityTasks] = useState([])
    const [noPriorityTasks, setNoPriorityTasks] = useState([])
    
    const openModal = (e) => {
        e.preventDefault();
        setShowModal(true)
        setTaskAdded(false)
    };

    useEffect(() => {
        if (!localStorage["tasks"]) {
            localStorage["tasks"] = "[]";
        }

        let tasks = localStorage["tasks"];
        tasks = JSON.parse(tasks);
        tasks = tasks.sort((a, b) => a.id - b.id)
        setTaskList(tasks);

        let highPriority = tasks.filter(task => task.priority === "High");
        setHighPriorityTasks(highPriority)

        let mediumPriority = tasks.filter(task => task.priority === "Medium");
        setMediumPriorityTasks(mediumPriority)

        let lowPriority = tasks.filter(task => task.priority === "Low");
        setLowPriorityTasks(lowPriority)

        let noPriority = tasks.filter(task => task.priority === "Priority");
        setNoPriorityTasks(noPriority)

    }, [taskAdded, taskRemoved]);

    const removeTask = (id) => {
        let tasks = JSON.parse(JSON.stringify(taskList));
        tasks = tasks.filter((task) => task.id !== id);
        localStorage["tasks"] = JSON.stringify(tasks);
        setTaskList(tasks);
        if (taskRemoved === false){
            setTaskRemoved(true)
        } else {
            setTaskRemoved(false)
        }
    };

    const editChecked = (id) => {
        let tasks = JSON.parse(JSON.stringify(taskList));
        let editedTask = tasks.find((task) => task.id == id);

        if(editedTask.checked === false) {
            editedTask.checked = true;
        } 
        else {
            editedTask.checked = false;
        }

        tasks = tasks.filter((task) => task.id != id);
        tasks.push(editedTask);
        localStorage["tasks"] = JSON.stringify(tasks);
        tasks = tasks.sort((a, b) => a.id - b.id)
        setTaskList(tasks)
    }

    useEffect(() => {
        if (!localStorage["tutorial"]) {
            localStorage["tutorial"] = "true";
        }

        let tutorial = localStorage["tutorial"];
        tutorial = JSON.parse(tutorial);
        setShowWelcomePage(tutorial)
    },[])
    
    const handleSkipTutorial = () => {
        localStorage.setItem("tutorial", "false");
        setShowWelcomePage(false)
    }

    const handleTaskAdded = () => {
        setTaskAdded(true);
        toast.success("Task created successfully", { theme: "colored", style : {backgroundColor: "#41993F", textAlign: 'center'}, toastId: "successAdd" });
    }

    return (
        <section className="bg-background w-[100vw] h-[100vh] p-4">
            <ToastContainer 
                position="top-center"
                autoClose={3000}
                hideProgressBar={false} 
                newestOnTop={false}
                limit={1} 
                role="alert"
            />
            <div className="w-[100%] flex justify-between items-center border-b border-text3 pb-2">
                <h4 className="text-header4">Tasks</h4>
            </div>
            {
                (!taskList[0] || !taskList[0].task) ?
                    <div className="h-[70%] flex flex-col justify-center items-center gap-4">
                        <img src={heroImg} alt="a graphic with a girl standing next to big phone, managing tasks" className="w-[200px]" />
                        <h5 className="text-subtitle">Start adding your tasks!</h5>
                        <p className="text-caption text-text1 text-center w-[200px]">Plan your day by adding tasks and allocating your energy among them.</p>
                    </div>
                    :
                    <div className="pt-2 pb-[100px]">
                        <ul>
                            {highPriorityTasks.map((task) => {
                                return (
                                    <li key={task.id}> <TaskCard task={task} onRemoveTask={removeTask} editChecked={editChecked} /></li>
                                )
                            })}
                        </ul>
                        <ul>
                            {mediumPriorityTasks.map((task) => {
                                return (
                                    <li key={task.id}> <TaskCard task={task} onRemoveTask={removeTask} editChecked={editChecked} /></li>
                                )
                            })}
                        </ul>
                        <ul>
                            {lowPriorityTasks.map((task) => {
                                return (
                                    <li key={task.id}> <TaskCard task={task} onRemoveTask={removeTask} editChecked={editChecked} /></li>
                                )
                            })}
                        </ul>
                        <ul>
                            {noPriorityTasks.map((task) => {
                                return (
                                    <li key={task.id}> <TaskCard task={task} onRemoveTask={removeTask} editChecked={editChecked} /></li>
                                )
                            })}
                        </ul>
                    </div>
                    
            }
            <button className="flex gap-3 fixed bottom-px right-px p-4 m-4 shadow-box-shadow rounded-2xl bg-accent" onClick={openModal}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="#0F0129" />
                </svg>
                <p className="text-button-text">Add Task</p>
            </button>
            {showModal && createPortal(
                <AddTaskModal 
                    setShowModal={setShowModal}
                    remainingSpoons={remainingSpoons}
                    handleTaskAdded={handleTaskAdded} />,
                document.body
            )}
            {showWelcomePage && createPortal(
                <WelcomePage 
                    handleSkipTutorial={handleSkipTutorial}
                    setShowTutorialPage={setShowTutorialPage}
                />,
                document.body
            )}
            {showTutorialPage && createPortal(
                <TutorialPage 
                    handleSkipTutorial={handleSkipTutorial}
                    setShowTutorialPage={setShowTutorialPage}
                />,
                document.body
            )}
         
        </section>
    )
}


export default TasksPage;