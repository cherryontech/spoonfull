import 'chart.js/auto';
import { Pie } from "react-chartjs-2";

// eslint-disable-next-line react/prop-types
const SpoonChart = ({remainingSpoons, usedSpoons, plannedSpoons}) => {
    const data = {
        labels: ["Used", "Planned", "Available"],
        datasets: [{
            label: "Spoons",
            data: [usedSpoons, plannedSpoons, remainingSpoons],
            backgroundColor: ["rgba(35, 161, 175, 0.25)","rgba(35, 161, 175, 0.75)", "#23A1AF"]
            }]
    }
    return (
        <div className='w-[200px] h-[200px] md:w-[300px] md:h-[300px] xl:w-[375px] xl:h-[375px]'>
            <Pie 
            data={data}
            options={
                { 
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false,
                        }
                    }
                }
            }
        />
        </div>
    )
}

export default SpoonChart;