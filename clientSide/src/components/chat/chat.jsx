import React from 'react';
import styled from 'styled-components';

const Chat = () => {
  return (
    <StyledChat>
      <Construc>
      </Construc>
      Chat Coming Soon...
    </StyledChat>
  )
};
export default Chat;

const StyledChat = styled.div`
  display:grid;
  background-color: white;
  border-radius: 1em;
  height: 95%;
  width: 95%;
  margin: auto;
`

const Construc = styled.span`
  background-color: orange;
  height: 100%;
  width: 100%;
  -webkit-clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
`

const ComingSoon = styled.p`

`
