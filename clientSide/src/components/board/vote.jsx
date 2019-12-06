import React from 'react';
import Hand from '../hand/hand';
import styled from 'styled-components';

const Vote = ({ round, players}) => {
  console.log(Object.keys(players));
  if (round !== 3) {
    return null;
  }

  return (
    <div>

    </div>
  )

}
export default Vote;
