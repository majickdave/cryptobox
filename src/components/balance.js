import React from 'react';

export default function Welcome(props) {
  return <h1>Grettings, {props.name}, your balance is: {props.balance}</h1>;
}
