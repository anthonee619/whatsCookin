import React from 'react';
import Barter from './barter';
import Vote from './vote';
import PreGame from './pregame';
import Pick from './pick';
import styled from 'styled-components';

const Board = ({round, nextRound, players}) => {
  return (
    <StyledBoard>
      <PreGame
        round={round}
        players={players}></PreGame>
      <Barter
        players= {players}
        round={round}
        ></Barter>
      <Pick round={round}/>
      <Vote
        players={players}
        round={round}></Vote>
      <button onClick={nextRound}>Next Stage</button>
    </StyledBoard>
  );
};
export default Board;

const StyledBoard = styled.div`
  display: grid;
  grid-template: "." 1fr
                 "nextRound" auto;
  height: 100%;
  margin-left: 10px;
`

const nextRound = styled.button `
  grid-area: nextRound;

`
