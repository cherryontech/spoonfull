/* eslint-disable react/prop-types */
import 'react-toastify/dist/ReactToastify.css';


const DeleteTaskModal = ({ activeTask, onRemoveTask, setOpenSettings, setOpenDeleteModal }) => {
   
    const handleSubmit = () => {
        onRemoveTask(activeTask.id)
        setOpenSettings(false);
    }

    return (
        <section className="bg-text2 w-[100vw] h-[100vh] flex justify-center items-center fixed top-0 z-[6]" onClick={() => setOpenDeleteModal(false)}>
            <article className="bg-background w-[328px] h-[234px] p-6 rounded-4xl flex-shrink-0" onClick={e => e.stopPropagation()}>
                <div className="w-[100%] flex justify-between items-center border-b border-text3 pb-2">
                    <h4 className="text-header4">Delete Task</h4>
                </div>
                <p className="text-body py-6 w-full">Are you sure you want to delete this task?</p>
                <div className="flex justify-end gap-2">
                    <button className="btn-modal" onClick={() => setOpenDeleteModal(false)}>Cancel</button>
                    <button onClick={handleSubmit} className="btn-modal text-primary-text">Delete</button>
                </div>
            </article>
        </section>
    )
}

export default DeleteTaskModal;