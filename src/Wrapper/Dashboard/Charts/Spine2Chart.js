import React from 'react';
// import ReactApexChart from 'apexcharts';
import ReactApexChart from 'react-apexcharts';

const Spine2Chart = () => {
    const chartStyles = {
      height:'14vw',
    width:"100%",
        // overflow:"hidden",
            margin: '0px',
            padding: '0.5rem',
            // border:"1px solid green",
        };

  const chartData = {
    series: [
      {
        name: 'series1',
        data: [31, 40, 28, 51, 42, 109, 100],
      },
      {
        name: 'series2',
        data: [11, 32, 45, 32, 34, 52, 41],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: 'area',
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
      },
      xaxis: {
        type: 'datetime',
        categories: [
          '2018-09-19T00:00:00.000Z',
          '2018-09-19T01:30:00.000Z',
          '2018-09-19T02:30:00.000Z',
          '2018-09-19T03:30:00.000Z',
          '2018-09-19T04:30:00.000Z',
          '2018-09-19T05:30:00.000Z',
          '2018-09-19T06:30:00.000Z',
        ],
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm',
        },
      },
      grid: {
        show: false,
      },
      yaxis: {
        
        labels: {
          show: true, 
        },
        lines: {
          show: true,
        },
        axisBorder: {
          show: true, 
        },
        grid: {
          show: true,
        },
      }
    },
  };

  return (
    <div id="chart" style={chartStyles}>
      <ReactApexChart options={chartData.options} series={chartData.series} type="area" height={"100%"}  />
    </div>
  );
};

export default Spine2Chart;
