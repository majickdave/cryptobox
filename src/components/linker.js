import React from 'react';
import {Link} from 'react-router-dom';
import '../App.css';

export default function Linker(props) {

var padding = {"padding": "15px"}
  return <Link to="/dashboard" style={padding}>
  <button  className="btn btn-round btn-outline-info" type="button" >
    <p>Link {props.name}</p><img src={props.icon} alt="bitcoin-icon"></img></button></Link>
}
