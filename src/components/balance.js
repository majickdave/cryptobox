import React from 'react';

export default function Welcome(props) {
  var color = {"color": "lightgreen"}

  // var percent = function () {
  //   return ((props.balance.toFloat() - 5000) / 5000) * 100
  // }
  const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
  return <div className="bg-dark text-light">
    <h3>Greetings {props.name}, your balance is:</h3>
  <u><p style={color}>${numberWithCommas(props.balance)}.00</p></u>
</div>
}
