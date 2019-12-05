import React from 'react';
import Barter from './barter';
import Vote from './vote';
import styled from 'styled-components';

const Board = ({round, nextRound, players}) => {
  return (
    <StyledBoard>
      <h1>Board Component</h1>
      <Barter
        players= {players}
        round={round}
        ></Barter>
      <Vote round={round}></Vote>
      <button onClick={nextRound}>Next Stage</button>
    </StyledBoard>
  );
};
export default Board;

const StyledBoard = styled.div`

`
