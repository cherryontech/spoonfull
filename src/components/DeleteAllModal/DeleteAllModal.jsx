/* eslint-disable react/prop-types */
import 'react-toastify/dist/ReactToastify.css';


const DeleteTaskModal = ({ setOpenDeleteAll, handleClearAllTasks }) => {

    return (
        <section className="bg-text1 w-[100vw] h-[100vh] flex justify-center items-center fixed top-0 z-[6]" onClick={() => setOpenDeleteAll(false)}>
            <article className="bg-background w-[328px] h-[234px] p-6 rounded-4xl flex-shrink-0" onClick={e => e.stopPropagation()}>
                <div className="w-[100%] flex justify-between items-center border-b border-text3 pb-2">
                    <h4 className="text-header4">Clear All</h4>
                </div>
                <p className="text-body py-6 w-full">Confirm to clear all tasks and rest your spoons?</p>
                <div className="flex justify-end gap-2">
                    <button className="btn-modal" onClick={() => setOpenDeleteAll(false)}>Cancel</button>
                    <button onClick={handleClearAllTasks} className="btn-modal text-primary-text">Delete</button>
                </div>
            </article>
        </section>
    )
}

export default DeleteTaskModal;