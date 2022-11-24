import "./PriceChart.scss";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface PriceChartProps {
  data: { labels: string[]; values: number[] };
  label: string;
  chartTitle: string;
}

export default function PriceChart({ data, label, chartTitle }: PriceChartProps) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: chartTitle,
      },
    },
  };

  function buildData() {
    return {
      labels: data.labels,
      datasets: [
        {
          label: label,
          data: data.values,
          borderColor: "rgb(255, 99, 132)",
          backgroundColor: "rgba(255, 99, 132, 0.5)",
        },
      ],
    };
  }

  return (
    <div className="PriceChart">
      <Line options={options} data={buildData()} />
    </div>
  );
}
