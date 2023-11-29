/* eslint-disable react/prop-types */
import { useState } from "react";
import { createPortal } from "react-dom";
import TaskSettingsModal from "../TaskSettingsModal/TaskSettingsModal";
import DeleteTaskModal from "../DeleteTaskModal/DeleteTaskModal";


const TaskCard = ({ task, onRemoveTask, editChecked, remainingSpoons, handleTaskEdited }) => {
    const [isChecked, setChecked] = useState(task.checked)
    const [openSettings, setOpenSettings] = useState(false);
    const [openDeleteTask, setDeleteTask] = useState(false)
    const [activeTask, setActiveTask] = useState("")
    const [swipeStart, setSwipeStart] = useState(0)
   

    const handleCheck = (e) => {
        const ischecked = e.target.checked;
        setChecked(ischecked);
        editChecked(e.target.value)
    };

    const handleOpenSettings = () => {
        setOpenSettings(true);
        setActiveTask(task)
    }

    const handleSwipe = (e) => {
        const swipeEnd = e.changedTouches[0].clientX;
        const clickedEl = e.target.closest("article")
        if(clickedEl === null) {
            return;
        }
        if (
        swipeEnd < swipeStart
        ) {
            clickedEl.classList.add("translate-x-[-120px]")
        } else if (
            swipeEnd >= swipeStart 
        ) {
            clickedEl.classList.remove("translate-x-[-120px]")
        }
    }


    return (
        <section className="flex justify-between items-center overflow-x-clip relative" onTouchEnd={handleSwipe} onTouchStart={e => setSwipeStart(e.changedTouches[0].clientX)}>
            <article className="w-full min-w-[328px] py-1 z-[2] bg-background transition ease-in-out">
                <div className={`bg-${task.background} shadow-card-shadow rounded-lg flex items-start justify-between pl-4`}>
                    <div className="flex py-4 items-center">
                        <input
                            className="peer appearance-none p-2.5 w-[24] h-[24] border rounded-sm mr-5 mt-1 shrink-0 checked:bg-accent checked:border-accent1"
                            type="checkbox"
                            data-id="checkbox"
                            id="checkbox"
                            value={task.id}
                            checked={isChecked}
                            onChange={handleCheck}
                        />
                        <svg
                            className="absolute w-4 h-4 mt-1 ml-0.5 hidden peer-checked:block pointer-events-none"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#F8FAFC"
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <div className="my-2 flex flex-col items-start gap-2">
                            <label className="mr-10 text-body" htmlFor="checkbox">{task.task}</label>
                            <div className="flex justify-between items-center gap-2">
                                <div className="flex gap-1 p-2 py-1 pr-4 justify-between items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        width="18"
                                        height="18"
                                        viewBox="0 0 18 18"
                                        fill="none">
                                        <g clipPath="url(#clip0_704_29290)">
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd" d="M9.0223 10.3045L3.3163 5.77904C3.12251 5.62554 2.96338 5.43278 2.84937 5.21342C2.73536 4.99406 2.66905 4.75306 2.65478 4.50625C2.64051 4.25944 2.67861 4.01241 2.76659 3.78137C2.85456 3.55034 2.99041 3.34052 3.16522 3.16571C3.34003 2.9909 3.54985 2.85505 3.78088 2.76708C4.01192 2.6791 4.25896 2.641 4.50576 2.65527C4.75257 2.66953 4.99357 2.73585 5.21293 2.84986C5.43229 2.96387 5.62505 3.123 5.77855 3.31679L10.3041 9.02279C11.2843 8.59454 12.7791 8.53679 14.0383 9.79529C14.7996 10.5573 15.2736 11.4888 15.4355 12.3753C15.5931 13.2378 15.4723 14.1948 14.8333 14.8338C14.1951 15.4728 13.2373 15.5935 12.3755 15.436C11.489 15.274 10.5568 14.8 9.79555 14.038C8.53555 12.7788 8.59405 11.2848 9.0223 10.3045Z"
                                                fill="#001111"
                                                fillOpacity="0.75" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_704_29290">
                                                <rect width="18" height="18" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <p className="text-caption">x</p>
                                    <p className="text-caption">{task.spoons}</p>
                                </div>
                                {(task.priority === "Priority")?
                                    <p></p>
                                    :
                                    <div className="flex justify-between items-center gap-1 p-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path d="M14 3.00004V10.5C13.9996 10.5712 13.984 10.6415 13.9543 10.7062C13.9245 10.7708 13.8813 10.8284 13.8275 10.875C12.8725 11.7019 11.9594 12 11.0887 12C9.90687 12 8.80312 11.4538 7.77625 10.9469C6.11687 10.125 4.67438 9.41317 3 10.7357V13.5C3 13.6327 2.94732 13.7598 2.85355 13.8536C2.75979 13.9474 2.63261 14 2.5 14C2.36739 14 2.24021 13.9474 2.14645 13.8536C2.05268 13.7598 2 13.6327 2 13.5V3.00004C2.00048 2.92881 2.01617 2.85851 2.04603 2.79383C2.07589 2.72916 2.11922 2.67161 2.17313 2.62504C4.42313 0.676294 6.4425 1.67442 8.2225 2.55504C9.9375 3.40379 11.4244 4.13754 13.1725 2.62504C13.2448 2.56241 13.3335 2.52181 13.4281 2.50805C13.5227 2.4943 13.6193 2.50796 13.7064 2.54743C13.7935 2.5869 13.8674 2.65052 13.9195 2.73074C13.9715 2.81096 13.9995 2.90442 14 3.00004Z" fill="#001111" fillOpacity="0.75"/>
                                        </svg>
                                        <p className="text-caption text-text1">{task.priority}</p>
                                    </div>
                            }
                            </div>
                        </div>
                    </div>
                    <div className="flex p-2.5 justify-center items-center">
                        <button
                            className="mt-1 p-2.5"
                            onClick={handleOpenSettings}
                        >
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                width="24" 
                                height="24" 
                                viewBox="0 0 24 24" 
                                fill="none"
                                >
                                <path d="M6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10ZM18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z" fill="#0F0129"/>
                            </svg>
                        </button>
                        {openSettings && createPortal(
                            <TaskSettingsModal 
                                setOpenSettings={setOpenSettings}
                                activeTask={activeTask}
                                onRemoveTask={onRemoveTask}
                                remainingSpoons={remainingSpoons}
                                handleTaskEdited={handleTaskEdited}
                            />,
                            document.body
                        )}
                    </div>
                </div>
            </article>
            <button value={task.id} className="w-[120px] flex justify-center items-center gap-2 right-0 text-error text-button-text absolute z-[1]" onClick={() => setDeleteTask(true)}>
                <svg value={task.id} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M12 6.75003V14.25H6V6.75003H12ZM10.875 2.25003H7.125L6.375 3.00003H3.75V4.50003H14.25V3.00003H11.625L10.875 2.25003ZM13.5 5.25003H4.5V14.25C4.5 15.075 5.175 15.75 6 15.75H12C12.825 15.75 13.5 15.075 13.5 14.25V5.25003Z" fill="#D61F14"/>
                </svg>
                Delete
            </button>
            {openDeleteTask && createPortal(
                <DeleteTaskModal 
                    onRemoveTask={onRemoveTask}
                    activeTask={task}
                    setOpenSettings={setOpenSettings}
                />,
                document.body
            )}
        </section>
        
    )
}

export default TaskCard;
