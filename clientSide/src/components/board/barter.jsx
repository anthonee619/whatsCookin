import React from 'react';
import styled from 'styled-components';

const Barter = ({round, players}) => {
  if (round !== 1) {
    return null;
  }
  else {
    return (
      <div>
        <h2>bartering</h2>
        <ul>
          {players.map(players=> (
            <li>{players.username}</li>
          ))}
        </ul>

      </div>
    )
  }
}
export default Barter;
