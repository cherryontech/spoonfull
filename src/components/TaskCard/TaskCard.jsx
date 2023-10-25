import { useState } from "react";

const TaskCard = ({ task }) => {
    const [isChecked, setChecked] = useState(false)

    const handleCheck = () => {
        setChecked(!isChecked);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
          handleCheck();
        }
    }

    // const handleOnClick = (e) => {
    //     if (e.key === 'Enter') {
    //       handleCheck();
    //     }
    // }

    return (
        <div className="w-full p-4">
            <div className="bg-navbar-background rounded-2xl p-4 flex flex-col justify-between">
                <div className="my-2 flex gap-2">
                    <input
                        className="relative peer appearance-none w-4 h-4 border rounded-sm mt-1 shrink-0 checked:bg-accent checked:border-0"
                        type="checkbox"
                        id="checkbox" 
                        // value={isChecked}
                        onChange={handleCheck}
                        // value={isChecked}
                        
                        />
                    <label className="mb-2">{task.task}</label>
                    <svg
                        className="absolute w-4 h-4 mt-1 hidden peer-checked:block"
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
                </div>
            </div>
        </div>
    )
}

export default TaskCard;
