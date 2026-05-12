import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement
);

function GrafikProduksi() {
  const [dataProduksi, setDataProduksi] = useState([]);

  // Simulasi fetch data realtime/random
  useEffect(() => {
    const interval = setInterval(() => {
      const randomData = [
        Math.floor(Math.random() * 100) + 120,
        Math.floor(Math.random() * 100) + 120,
        Math.floor(Math.random() * 100) + 120,
        Math.floor(Math.random() * 100) + 120,
        Math.floor(Math.random() * 100) + 120,
        Math.floor(Math.random() * 100) + 120,
      ];

      setDataProduksi(randomData);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const data = {
    labels: ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00'],
    datasets: [
      {
        label: 'Jumlah Produksi',
        data: dataProduksi,
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
      {
        label: 'Target',
        data: [150, 150, 150, 150, 150, 150],
        type: 'line',
        borderColor: 'red',
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Grafik Produksi Harian',
      },
    },
  };

  return <Bar data={data} options={options} />;
}

export default GrafikProduksi;