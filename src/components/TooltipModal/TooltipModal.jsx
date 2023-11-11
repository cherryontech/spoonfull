/* eslint-disable react/prop-types */


const TooltipModal = ({ setOpenTooltip }) => {
    return (
        <section className="w-full h-full fixed top-0 flex items-center justify-center">
            <div className="w-[328px] h-[442px] relative">
                <div className="bg-text px-2 py-1 rounded w-[168px] absolute z-20 top-[24px] right-[4px]" onClick={() => setOpenTooltip(false)}>
                    <p className="text-caption text-background">You can assign a number of spoons to indicate the energy this task might take. Ideally everyday you try not to go over 12 spoons.</p>
                </div>    
            </div>     
        </section>
    )
}

export default TooltipModal;