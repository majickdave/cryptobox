import React from 'react';
import round from '../js/round';

export default function Welcome(props) {
  var color = {"color": "green"}

  // var percent = function () {
  //   return ((props.balance.toFloat() - 5000) / 5000) * 100
  // }
  return <div>
    <h3>Greetings {props.name}, your balance is:</h3>
  <p style={color}>${props.currentBalance}<small> (+{round((props.currentBalance-props.previousBalance)/props.previousBalance * 100, 2)})% last day</small></p>
</div>
}
