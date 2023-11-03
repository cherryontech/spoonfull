import { useState } from "react";

const TaskCard = ({ task, onRemoveTask, editChecked }) => {
    const [isChecked, setChecked] = useState(task.checked)

    const handleCheck = (e) => {
        const ischecked = e.target.checked;
        setChecked(ischecked);
        editChecked(e.target.value)
    };

    return (
        <div className="w-full p-1">
            <div className="bg-background shadow-card-shadow rounded-lg flex items-start justify-between pl-4">
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
                        <div className="flex gap-1 p-2 py-1 pr-4 justify-between items-center border-[0.4px] border-text1 rounded-lg">
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
                    </div>
                </div>
                <div className="flex p-2.5 justify-center items-center">
                    <button
                        className="mt-1 p-2.5"
                        onClick={() => onRemoveTask(task.id)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none">
                            <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
                                fill="black" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TaskCard;
