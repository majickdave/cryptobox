import React from 'react';

export default function Welcome(props) {
  var color = {"color": props.color}

  // var percent = function () {
  //   return ((props.balance.toFloat() - 5000) / 5000) * 100
  // }


const padding ={"paddingTop": "15px"}
  return <div style={padding}>
    <h3>{props.name} your balance is:</h3>
  <p style={color}>{'$'+props.balance.toLocaleString("currency")+'.00'}</p>
</div>
}
