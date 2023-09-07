import React from 'react';
import ReactApexChart from 'react-apexcharts';

const SpineChart = () => {
  const chartStyles = {
    height: '87%',
    width: '100%',
    margin: '0px',
    padding: '0rem',
    border:"1px solid green",
  };
  const toolbarStyles = `
  .apexcharts-toolbar {
    display: none !important;
  }
`;
  const chartData = {
    series: [
      {
        name: 'series1',
        data: [44, 55, 41, 67, 22, 60],
      },
    ],
    options: {
      chart: {
        type: 'area',
        height: 350,
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
      },
      labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6'],
      xaxis: {
        type: 'datetime',
        labels: {
          show: false, // Hide x-axis labels
        },
        lines: {
          show: false,
        },
        axisBorder: {
          show: false, // Hide x-axis border
        },
        tooltip: {
          enabled: false, // Disable x-axis tooltip
        },
        grid: {
          show: false, // Hide x-axis grid lines
        },
      },
      yaxis: {
        opposite: true,
        labels: {
          show: false, // Hide y-axis labels
        },
        lines: {
          show: false,
        },
        axisBorder: {
          show: false, // Hide y-axis border
        },
        grid: {
          show: false, // Hide y-axis grid lines
        },
      },
      grid: {
        show: false,
      },
      toolbar: {
        show: false, // Hide toolbar icons
      },
    },
  };

  return (
    <div id="chart" style={chartStyles}>
     <style>{toolbarStyles}</style> {/* Inject the CSS styles */}
      <ReactApexChart options={chartData.options} series={chartData.series} type="area" height={'100%'} />
    </div>
  );
};

export default SpineChart;
