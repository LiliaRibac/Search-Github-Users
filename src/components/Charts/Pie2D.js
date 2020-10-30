// STEP 1 - Include Dependencies
// Include react
import React from 'react';

// Include the react-fusioncharts component
import ReactFC from 'react-fusioncharts';

// Include the fusioncharts library
import FusionCharts from 'fusioncharts';

// Include the chart type
import Chart from 'fusioncharts/fusioncharts.charts';

// Include the theme as fusion
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

// STEP 4 - Creating the DOM element to pass the react-fusioncharts component
const ChartComponent = ({ data }) => {
  const chartConfigs = {
    // The chart type
    type: 'pie2d',
    width: '400', // Width of the chart
    height: '400', // Height of the chart
    dataFormat: 'json', // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        caption: 'Languages',
        theme: 'fusion',
        decimals: 0,
        pieRadius: '35%',
        paletteColors: ['#f0db4f', '#f96302', '#1da1f2', '#704db5', '#8cbe9a'],
      },
      // Chart Data
      data,
    },
  };

  return <ReactFC {...chartConfigs} />;
};

export default ChartComponent;