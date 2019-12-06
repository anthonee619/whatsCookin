import React from 'react';
import Hand from '../hand/hand';
import styled from 'styled-components';

const Vote = ({ round, playerHands}) => {
  console.log(playerHands)
  if (round !== 3) {
    return null;
  }

  return (
    <OuterDiv>
      <h3>Please choose a player you'd wish to vote for</h3>
      <StyledDiv length={playerHands.length}>
        {playerHands.map(player => (
          <div>
            <h5 key={player.player}>{player.username}</h5>
            <Hand
              cards={player.play_hand}
              onSelect={()=>{}} ></Hand>
            <p key={player.player + 'description'}>stuff here</p>
            // <p key={player.player + 'description'}>{player.play_description}</p>
          </div>
        ))}
      </StyledDiv>
    </OuterDiv>
  )

}
export default Vote;

const StyledDiv = styled.div`
  display: grid;
  grid-template-rows: repeat(4, 1fr);
`

const OuterDiv = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
`
