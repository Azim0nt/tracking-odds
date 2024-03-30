import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Chart from 'chart.js/auto';

const MyComponent = () => {
  const [data, setData] = useState([]);
  const [chart, setChart] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      if (chart) {
        chart.destroy(); // Уничтожаем предыдущий график
      }
      renderChart();
    }
  }, [data]);

  const renderChart = () => {
    const ctx = document.getElementById('myChart');

    if (ctx) {
      const newChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: data.map(post => post.id),
          datasets: [{
            label: 'Post IDs',
            data: data.map(post => post.id),
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
          }]
        },
        options: {
            maintainAspectRatiolarity:true,
         
        }
      });
      setChart(newChart); // Сохраняем ссылку на новый график
    }
  };

  return (
    <div className="cs2">
    <div className="cs2-dashboard">
        <div className="left"></div><div className="right"><canvas width={400} height={200} id='myChart'></canvas></div>
    </div>
</div>
  );
};

export default MyComponent;
