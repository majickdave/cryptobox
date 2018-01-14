import { Chart } from 'react-google-charts';
import React from 'react';

class ExampleChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        'title':'Your CryptoBox Account Split in $USD',
        'width':400,
        'height':400,

    },
      data: [
        ['Balance', 'Dollars'],
          ['BTC', 800],
          ['ETH', 400],
          ['LTC', 200],
          ['MNR', 100],
          ['XRP', 50],
      ],
    };
  }
  render() {
    return (
      <div id="piechart">
      <Chart
        chartType="PieChart"
        data={this.state.data}
        options={this.state.options}
        graph_id="ScatterChart"
        width="100px"
        height="400px"
        legend_toggle
      />
    </div>
    );
  }
}
export default ExampleChart;
