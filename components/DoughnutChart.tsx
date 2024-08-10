"use client"

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);




const DoughnutChart = ({accounts}: DoughnutChartProps) => {
    const data = {
        datasets: [
            {
                label: 'Számla',
                data: [1250, 2500, 3750],
                backgroundColor: ['#0747b6', '#2265d8', '#2f91fa'],
            
               
            }
        ],
        labels: ['Számla 1', 'Számla 2', 'Számla 3']
    }
  return (
    <Doughnut data={data} />
  )
}

export default DoughnutChart