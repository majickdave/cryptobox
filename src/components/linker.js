import React from 'react';
import {Link} from 'react-router-dom';

export default function Linker(props) {

  return <Link to="/dashboard">
  <button className="btn btn-round btn-outline-info" type="button" value="BTC" >
    <h2>{props.name}</h2></button></Link>
}
