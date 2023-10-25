const TaskCard = () => {

    return (
        <div className="w-full p-4">
            <div className="bg-navbar-background rounded-2xl p-4 flex flex-col justify-between">
                <div className="my-2 flex gap-2">
                    <input
                        className="appearance-none w-4 h-4 border rounded-sm mt-1 shrink-0"
                        type="checkbox" />
                    <label className="mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.</label>
                </div>
            </div>
        </div>
    )
}

export default TaskCard;
