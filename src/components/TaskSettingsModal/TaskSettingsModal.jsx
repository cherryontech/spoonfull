/* eslint-disable react/prop-types */
import { useState } from "react";
import { createPortal } from "react-dom";
import EditTaskModal from "../EditTaskModal/EditTaskModal";



const TaskSettingsModal = ({setOpenSettings, activeTask, remainingSpoons, handleTaskEdited}) => {
    const [openEditModal, setOpenEditModal] = useState(false)

    return (
        <section className="bg-text2 w-[100vw] h-[100vh] flex justify-center items-center fixed top-0" onClick={() => setOpenSettings(false)}>
            <article className="center-column bg-background w-[328px] p-6 rounded-4xl" onClick={e => e.stopPropagation()}>
                <button className="self-end" onClick={() => setOpenSettings(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="#001111"/>
                    </svg>
                </button>
                <div className="w-[100%] flex justify-between items-center border-b border-text3 pb-2">
                    <h4 className="text-header4">Tasks</h4>
                </div>
                <p className="text-body py-6 w-full">{activeTask.task}</p>
                <div className="center-column gap-4 w-full">
                    <button className="btn-settings bg-primary3" onClick={() => setOpenEditModal(true)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
                            <path d="M2.74902 12.9375V15.75H5.56152L13.8565 7.455L11.044 4.6425L2.74902 12.9375ZM4.93902 14.25H4.24902V13.56L11.044 6.765L11.734 7.455L4.93902 14.25ZM16.0315 4.2225L14.2765 2.4675C14.1265 2.3175 13.939 2.25 13.744 2.25C13.549 2.25 13.3615 2.325 13.219 2.4675L11.8465 3.84L14.659 6.6525L16.0315 5.28C16.324 4.9875 16.324 4.515 16.0315 4.2225Z" fill="#001111"/>
                        </svg>
                        Edit
                    </button>
                    <button className="btn-settings">
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
                            <path d="M12.5 6.75V14.25H6.5V6.75H12.5ZM11.375 2.25H7.625L6.875 3H4.25V4.5H14.75V3H12.125L11.375 2.25ZM14 5.25H5V14.25C5 15.075 5.675 15.75 6.5 15.75H12.5C13.325 15.75 14 15.075 14 14.25V5.25Z" fill="black"/>
                        </svg>
                        Delete
                    </button>
                </div>
            </article>
            {openEditModal && createPortal(
                <EditTaskModal 
                    setOpenEditModal={setOpenEditModal}
                    setOpenSettings={setOpenSettings}
                    remainingSpoons={remainingSpoons}
                    activeTask={activeTask}
                    handleTaskEdited={handleTaskEdited}
                />,
                document.body
            )}
        </section>
    )
}

export default TaskSettingsModal;