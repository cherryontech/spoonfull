import 'chart.js/auto';
import { Pie } from "react-chartjs-2";

// eslint-disable-next-line react/prop-types
const SpoonChart = ({remainingSpoons, usedSpoons, plannedSpoons}) => {
    const data = {
        labels: ["Used", "Planned", "Available"],
        datasets: [{
            label: "Spoons",
            data: [usedSpoons, plannedSpoons, remainingSpoons],
            backgroundColor: ["rgba(35, 161, 175, 0.50)","rgba(35, 161, 175, 0.75)", "#23A1AF"]
            }]
    }
    return (
        <div className='w-[200px]'>
            <Pie 
            data={data}
            options={
                { 
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