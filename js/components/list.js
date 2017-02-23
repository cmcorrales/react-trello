import React from 'react';
import Card from './card';

const CardList = (props) => {
  return (
    <div className="card-list">
      {props.title}
      <Card text="do laundry"/>
      <Card text="eat"/>
      <Card text="sleep"/>
    </div>
  );
};

export default CardList;
