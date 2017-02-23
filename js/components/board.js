import React from 'react';

import CardList from './list'

const Board = (props) => {
  return (
    <div className="board">
      <div>{props.title}</div>
      <CardList title="to do"/>
    </div>
  );
}
export default Board;
