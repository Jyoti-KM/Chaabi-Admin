import React from 'react';
import ReactApexChart from 'react-apexcharts';

const DonutChart = () => {
  const chartStyles = {
    height: '20vw', // Set the height to 100% to fill the container vertically
    width: '100%',  // Set the width to 100% to fill the container horizontally
    margin: '0px',
    padding: '2vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // border:"1px solid green",
    // backgroundColor:'red',
  };

  const donutStyles = `
  .apexcharts-svg {
    overflow: visible !important;
    display: flex !important;
    align-items: center !important;
    justify-content: space-between !important;
  }

  .apexcharts-legend{
    display:none !important;
  }
`;
  const chartData = {
    series: [44, 55, 41, 17, 15],
    options: {
      chart: {
        type: 'donut',
      },
      plotOptions: {
        pie: {
          customScale: 1.5,
          
          donut: {
            
            size: '55%', // Adjust this value to increase or decrease the width of the donut
            
          },
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    },
  };

  return (
    <div id="chart" style={chartStyles}>
    <style>{donutStyles}</style> 
      <ReactApexChart options={chartData.options} series={chartData.series} type="donut" height={"70%"} />
    </div>
  );
};

export default DonutChart;
