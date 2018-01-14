import React from 'react';

export default function Welcome(props) {
  var color = {"color": "green"}

  // var percent = function () {
  //   return ((props.balance.toFloat() - 5000) / 5000) * 100
  // }
  return <p style={color}>{props.balance}<small> (+{3.3})%</small></p>;
}
