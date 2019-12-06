import React from 'react';
import styled from 'styled-components';

const Chat = () => {

  return (
    <StyledChat>
      <ChatTitle>Chat Box</ChatTitle>
      <MessageBox></MessageBox>
      <TypeMessage>
        <MessageInput placeholder="type your message"></MessageInput>
        <SendMessage >Send</SendMessage>
      </TypeMessage>
    </StyledChat>
  )
};
export default Chat;

const StyledChat = styled.div`
  display:grid;
  grid-template:
  "chat" auto
  "message" 4fr
  "typeMessage" 1fr;
  background-color: white;
  border-radius: 1em;
  height:100%;
`

const ChatTitle = styled.h4 `
  grid-area: chat;
  justify-content: center;
  border-bottom: 1px solid black;
`

const MessageBox = styled.div`

`
const TypeMessage = styled.div`
  display: grid;
  grid-template:
  "messageInput" 1fr
  "send" 1fr;

  border-top:1px solid black;


`

const MessageInput = styled.input`
  grid-area: messageInput;

`

const SendMessage = styled.button`
  grid-area: send;

`
