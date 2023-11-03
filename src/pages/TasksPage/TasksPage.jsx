import heroImg from "../../assets/heroImg.png";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import AddTaskModal from "../../components/AddTaskModal/AddTaskModal";
import TaskCard from "../../components/TaskCard/TaskCard";
import WelcomePage from "../WelcomePage/WelcomePage";
import SpoonsModal from "../../components/SpoonsModal/SpoonsModal";


const TasksPage = () => {
    const maxSpoons = 12
    const [showModal, setShowModal] = useState(false);
    const [showWelcomePage, setShowWelcomePage] = useState(true);
    const [showSpoonsModal, setShowSpoonsModal] = useState(false)
    const [taskList, setTaskList] = useState([]);
    const [remainingSpoons, setRemainingSpoons] = useState(maxSpoons);
    const [usedSpoons, setUsedSpoons] = useState(0);
    const [plannedSpoons, setPlannedSpoons] = useState(0);
    

    const openModal = (e) => {
        e.preventDefault();
        setShowModal(true)
    };

    useEffect(() => {
        if (!localStorage["tasks"]) {
            localStorage["tasks"] = "[]";
        }

        let tasks = localStorage["tasks"];
        tasks = JSON.parse(tasks);
        tasks = tasks.sort((a, b) => a.id - b.id)
        setTaskList(tasks)
    }, []);

    const removeTask = (id) => {
        let tasks = JSON.parse(JSON.stringify(taskList));
        tasks = tasks.filter((task) => task.id !== id);
        localStorage["tasks"] = JSON.stringify(tasks);
        setTaskList(tasks)
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
        const spoonCount = (arr) => {

            const checkedArray = [];
            arr.map(task => {
                if(task.checked === true) {
                    return checkedArray.push(task.spoons)
                }
            })
            const used = checkedArray.reduce((accumulator, spoon) => accumulator + spoon, 0);

            const spoonArray = [];
            arr.map(task => {
                return spoonArray.push(task.spoons);
            })
            const totalSpoons = spoonArray.reduce((accumulator, currentSpoon) => accumulator + currentSpoon, 0);
           
            setUsedSpoons(used)
            setPlannedSpoons(totalSpoons - used)
            setRemainingSpoons(maxSpoons - totalSpoons)
        }

        spoonCount(taskList);

    }, [taskList])

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
        window.location.reload();
    }

    return (
        <section className="bg-background w-[100vw] h-[100vh] p-4">
            <div className="w-[100%] flex justify-between items-center border-b border-text3 pb-2">
                <h4 className="text-header4">Tasks</h4>
                <button className="btn-modal" onClick={() => setShowSpoonsModal(true)}>Spoons</button>
            </div>
            {
                (!taskList[0] || !taskList[0].task) ?
                    <div className="h-[650px] flex flex-col justify-center items-center gap-4">
                        <img src={heroImg} alt="a graphic with a girl standing next to big phone, managing tasks" className="w-[200px]" />
                        <h5 className="text-subtitle">Start adding your tasks!</h5>
                        <p className="text-caption text-text1 text-center w-[200px]">Plan your day by adding tasks and allocating your energy among them.</p>
                    </div>
                    :
                    <div className="py-2">
                        <ul>
                            {taskList.map((task) => {
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
                    remainingSpoons={remainingSpoons} />,
                document.body
            )}
            {showWelcomePage && createPortal(
                <WelcomePage handleSkipTutorial={handleSkipTutorial}/>,
                document.body
            )}
            {showSpoonsModal && createPortal(
                <SpoonsModal 
                    setShowSpoonsModal={setShowSpoonsModal}
                    remainingSpoons={remainingSpoons} 
                    usedSpoons={usedSpoons}
                    plannedSpoons={plannedSpoons}   
                />,
                document.body
            )}
        </section>
    )
}


export default TasksPage;