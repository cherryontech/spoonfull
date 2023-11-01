import { useState } from "react";

const TaskCard = ({ task, onRemoveTask }) => {
    const [isChecked, setChecked] = useState(false)

    const handleCheck = (e) => {
        const ischecked = e.target.checked;
        setChecked(ischecked);
    };

    return (
        <div className="w-full p-1">
            <div className="bg-background shadow-card-shadow rounded-lg p-4 flex flex-col">
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
                    <label className="mr-10" htmlFor="checkbox"> {task.task}</label>
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
                        className="mt-1 absolute right-10"
                        onClick={() => onRemoveTask(task.id)}
                    >
                        <svg
                            className="w-4 h-4 shrink-0"
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
                                    <div className="flex gap-1 p-2 justify-between items-center border-[0.4px] rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none">
                            <g clip-path="url(#clip0_704_29290)">
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd" d="M9.0223 10.3045L3.3163 5.77904C3.12251 5.62554 2.96338 5.43278 2.84937 5.21342C2.73536 4.99406 2.66905 4.75306 2.65478 4.50625C2.64051 4.25944 2.67861 4.01241 2.76659 3.78137C2.85456 3.55034 2.99041 3.34052 3.16522 3.16571C3.34003 2.9909 3.54985 2.85505 3.78088 2.76708C4.01192 2.6791 4.25896 2.641 4.50576 2.65527C4.75257 2.66953 4.99357 2.73585 5.21293 2.84986C5.43229 2.96387 5.62505 3.123 5.77855 3.31679L10.3041 9.02279C11.2843 8.59454 12.7791 8.53679 14.0383 9.79529C14.7996 10.5573 15.2736 11.4888 15.4355 12.3753C15.5931 13.2378 15.4723 14.1948 14.8333 14.8338C14.1951 15.4728 13.2373 15.5935 12.3755 15.436C11.489 15.274 10.5568 14.8 9.79555 14.038C8.53555 12.7788 8.59405 11.2848 9.0223 10.3045Z"
                                    fill="#001111"
                                    fill-opacity="0.75" />
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
            </div>
        </div>
    )
}

export default TaskCard;
