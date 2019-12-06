import React from 'react';
import Hand from '../hand/hand';
import styled from 'styled-components';

const Vote = ({ round, players}) => {
  console.log(players)
  if (round !== 3) {
    return null;
  }

  return (
    <div>
      {Object.keys(players).map(player => (
        <Hand
          cards = {players[player].play_hand}
          key={player}>
        </Hand>


      )
    </div>
  )

}
export default Vote;
