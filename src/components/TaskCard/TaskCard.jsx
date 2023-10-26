import { useState } from "react";

const TaskCard = ({ task, onRemoveTask }) => {
    const [isChecked, setChecked] = useState(false)

    const handleCheck = (e) => {
        const ischecked = e.target.checked;
        setChecked(ischecked);
    };

    return (
        <div className="w-full p-4">
            <div className="bg-navbar-background rounded-2xl p-4 flex flex-col">
                <div className="my-2 flex gap-2">
                    <input
                        className="relative peer appearance-none w-4 h-4 border rounded-sm mr-5 mt-1 shrink-0 checked:bg-accent checked:border-0"
                        type="checkbox"
                        data-id="checkbox"
                        id="checkbox"
                        value="checkbox"
                        checked={isChecked}
                        onChange={handleCheck}
                    />
                    <label className="mr-5" htmlFor="checkbox"> {task.task}</label>
                    <svg
                        className="absolute w-4 h-4 mt-1 hidden peer-checked:block pointer-events-none"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#f8fafc"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <button
                        className="-mt-3"
                        onClick={() => onRemoveTask(task.id)}>
                        <svg
                            className="w-4 h-4 absolute right-10 shrink-0"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TaskCard;
