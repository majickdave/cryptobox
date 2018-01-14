import React from 'react';

export default function Welcome(props) {
  return <h3>Greetings, {props.name} your balance is: {props.balance}</h3>;
}
