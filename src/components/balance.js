import React from 'react';

export default function Welcome(props) {
  var color = {"color": props.color}

  // var percent = function () {
  //   return ((props.balance.toFloat() - 5000) / 5000) * 100
  // }


  return <div>
  <p >{'Balance: $'+props.balance.toLocaleString("currency")+'.00'}</p>
  <small style={color}>{' (+ ' + props.percent + ') ' + props.time}</small>
</div>
}
