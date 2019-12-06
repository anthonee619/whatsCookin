import React from 'react';
import styled from 'styled-components';
import Chat from '../chat/chat';

const Barter = ({round, players}) => {
  if (round !== 1) {
    return null;
  }
  else {
    return (
      <StyledDiv>
        <Title>
          Bartering Stage
        </Title>
        <Players>
          {players.map(player => (
            <div>
                <h5 key={player.socket_id}>{player.username}</h5>
                <Chat key={player.socket_id + player.socket_id}/>
            </div>
          ))}
        </Players>
      </StyledDiv>
    )
  }
}
export default Barter;

const StyledDiv = styled.div`
  display: grid;
  grid-template: 'title' auto
                  'players' 1fr;
  justify-items: center;
`

const Title = styled.h2`
  grid-area: title;
`

const Players = styled.div`
  display:grid;
  grid-area: players;
  grid-gap: 10px
  grid-template-columns: auto auto;
  grid-template-rows: auto auto;
`
