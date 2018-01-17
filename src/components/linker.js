import React from 'react';
import {Link} from 'react-router-dom';
import '../App.css';

export default function Linker(props) {

var padding = {"paddingTop": "15px"}
  return <Link to="/dashboard" style={padding} >
            <button className="btn btn-round btn-outline-secondary" type="button" >
              <p>Link {props.name}</p><img src={props.icon} alt="bitcoin-icon"></img></button>
          </Link>
}
