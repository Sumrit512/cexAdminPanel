// import React from 'react'


// import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

// const data = [
//   { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
//   // ... other data
// ];


// const RenderLineChart = () => {
//   return (
//     <BarChart width={730} height={250} data={data}>
//     <XAxis dataKey="name" />
//     <YAxis />
//     <Tooltip />
//     <Bar dataKey="uv" fill="#8884d8" />
//   </BarChart>
//   )
// }

// export default RenderLineChart


import { Chart as ChartJS, BarElement, LinearScale, CategoryScale, PointElement, ArcElement, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(BarElement, LinearScale, CategoryScale, PointElement, ArcElement, Tooltip, Legend);

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First Dataset',
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 2,
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const RenderLineChart = () => (
  <Bar data={data} options={options}  />
);

export default RenderLineChart


// import { ResponsiveBar } from '@nivo/bar';

// const data = [
//   {
//     country: 'USA',
//     'Hot Dogs': 137.9,
//     'Hamburgers': 127.4,
//     'Cheeseburgers': 84.75,
//     'Sandwiches': 72.7,
//   },
//   // ... other data
// ];

// const RenderLineChart = () => (
//   <ResponsiveBar
//     data={data}
//     keys={['Hot Dogs', 'Hamburgers', 'Cheeseburgers', 'Sandwiches']}
//     indexKey="country"
//     margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
//     padding={0.5}
//     xAxis={{ tickSize: 5 }}
//     yAxis={{ tickSize: 5 }}
//   />
// );

// export default RenderLineChart