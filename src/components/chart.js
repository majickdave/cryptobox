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
        'pieHole':0.9,


    },
      data: [
        ['Balance', 'Dollars'],
          ['BTC', 3306.43],
          ['ETH', 1126.28],
          ['LTC', 400.33],
          ['XMR', 150.06],
          ['XRP', 75.09],
      ],
    };
  }
  render() {

    return (
      <div  id="piechart">
      <Chart
        chartType="PieChart"
        data={this.state.data}
        options={this.state.options}
        graph_id="PieChart"
        width="100%"
        height="auto"
        legend_toggle
      />
    </div>
    );
  }
}
export default ExampleChart;
