import React from 'react';
// import ReactApexChart from 'apexcharts';
import ReactApexChart from 'react-apexcharts';

const DonutChart = () => {
    const chartStyles = {
        height:'100%',
        width:'100%',
        overflow:"hidden",
            // Define your inline styles here
            // height: '350px',
            // border: '1px solid #ccc',
            // display:"flex",
            // justifyContent:'center',
            // alignItem:'center',
            // margin: '0px',
            // padding: '0px',
        };

  const chartData = {
    series: [44, 55, 41, 17, 15],
    options: {
      chart: {
        type: 'donut',
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
      <ReactApexChart options={chartData.options} series={chartData.series} type="donut" />
    </div>
  );
};

export default DonutChart;
