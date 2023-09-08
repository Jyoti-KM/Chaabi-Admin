import React from 'react';
// import ReactApexChart from 'apexcharts';
import ReactApexChart from 'react-apexcharts';

const RadialChart = () => {

    const chartStyles = {
        // height:'100%',
        // width:'20vw',
        height: '20vw',
        margin: '0px',
        padding: '1rem',
        paddingBottom:'0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // overflow:"hidden",
        border:"1px solid green",
    }

    const radialStyles = `
    .apexcharts-svg {
      overflow: visible !important;
      display: flex !important;
      align-items: center !important;
      justify-content: space-between !important;
    }
  
   
  `;
  const chartData = {
    series: [44, 55, 67, 83],
    options: {
      chart: {
        height: 350,
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: '22px',
            },
            value: {
              fontSize: '16px',
            },
            total: {
              show: true,
              label: 'Total',
              formatter: function (w) {
                // By default this function returns the average of all series. The below is just an example to show the use of a custom formatter function
                return 249;
              },
            },
          },
        },
      },
      labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
    },
  };

  return (
    <div id="chart" style={chartStyles}>
      <style>{radialStyles}</style> 
      <ReactApexChart options={chartData.options} series={chartData.series} type="radialBar" height={"110%"}/>
    </div>
  );
};

export default RadialChart;
