import React from 'react';

export default function Welcome(props) {
  var color = {"color": "lightgreen"}

  // var percent = function () {
  //   return ((props.balance.toFloat() - 5000) / 5000) * 100
  // }
  return <div>
    <h3>Greetings {props.name}, your balance is:</h3>
  <u><p style={color}>{props.balance}<small> (+{3.3})%</small></p></u>
</div>
}
