import React from 'react';

export default function TextInput(props) {
  var margin = {"margin": "15px", "border": "1px solid black"}
  // var percent = function () {
  //   return ((props.balance.toFloat() - 5000) / 5000) * 100
  // }
  return <div>
    <input className="form-input" type={props.type} placeholder={props.name} style={margin}></input>
</div>
}
