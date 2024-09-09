import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register the necessary components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3, 7],
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
    },
  ],
};

export default function DashboardGraphs() {
  return (
    <div className="max-w-lg mx-auto mt-8">
      <h2 className="text-xl font-bold">Dashboard Overview</h2>
      <Bar data={data} />
    </div>
  );
}
