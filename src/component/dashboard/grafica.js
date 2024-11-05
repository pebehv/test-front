import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const Grafica = () => {
  const data = {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'], // Etiquetas en el eje X
    datasets: [
      {
        label: 'Ventas',
        data: [12, 19, 3, 5, 2], // Datos de las barras
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
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
        text: 'Gráfica de Ventas',
      },
    },
  };

  return (
    <div>
      <h2>Gráfica de Ventas</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default Grafica;