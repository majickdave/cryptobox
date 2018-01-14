import React from 'react';

export default function Welcome(props) {
  var color = {"color": "green"}

  var percent = function () {
    return ((props.balance.toFloat() - 5000) / 5000) * 100
  }
  return <h3>Greetings, {props.name} your balance is: <p style={color}>{props.balance}<small>{percent}</small></p></h3>;
}
