import React from 'react';
import {Link} from 'react-router-dom';
import '../App.css';

export default function Linker(props) {

  return <Link to="/dashboard">
  <button className="btn btn-round btn-outline-info" type="button" >
    <h2>{props.name}</h2><img src={props.icon} alt="bitcoin-icon"></img></button></Link>
}
