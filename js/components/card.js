import React from 'react';
import ReactDOM from 'react-dom';

const Card = (props) => {
  return (
    <div className="card">{props.text}</div>
  );
};

export default Card;
