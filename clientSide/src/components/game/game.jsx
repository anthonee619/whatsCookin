import React, {useState, useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import queryString from 'query-string';
import io from 'socket.io-client';
import Hand from '../hand/hand';
import Chat from '../chat/chat';
import Board from '../board/board';
import Points from '../points/points';
import styled from 'styled-components';

let socket;

const Game = () => {
  // Hard state sets for front end development
  const [name, setName] = useState('Anthony');
  const [room, setRoom] = useState('1');
  const [mealState, setMealState] = useState('Breakfast');
  const [points, setPoints] = useState([{player: "Roland", score: 100000},
                                        {player: "Alice", score: 42069},
                                        {player: "Roselle", score: 20},])
  const [cards, setCards] = useState(
    [{key: 1, selected: 0, path: "avocado.png"},
     {key: 2, selected: 0, path: "bread.png"},
     {key: 3, selected: 0, path: "bread.png"},
     {key: 4, selected: 0, path: "bread.png"},
     {key: 5, selected: 0, path: "bread.png"},
     {key: 6, selected: 0, path: "butter.png"}]);
  const ENDPOINT = "localhost:5000";

  const location = useLocation();
  useEffect(()=>{});


  // useEffect(() => {
  //   const {name, room} = queryString.parse(location.search);
  //   socket = io(ENDPOINT);
  //   setName(name);
  //   setRoom(room);
  //
  //   socket.emit('joinGame', { name, room }, (error) => {
  //     if (error){
  //       console.log(error);
  //     }
  //   });
  //
  //   return() => {
  //     socket.emit('disconnect');
  //     socket.off();
  //   }
  // }, [ENDPOINT, location.search]);

  const next = () => {
    setMealState('Lunch');
    // socket.emit('next', {room}, () => {
    //   console.log("Next Move recieved");
    // })
  }

  return (
    <StyledDiv>
      <State>Current Meal: {mealState}</State>
      <Next onClick={next}>Next </Next>
      <Grid>
        <Points area="points" points={points}></Points>
      </Grid>
      <Grid area="chat">
        <Chat ></Chat>
      </Grid>
      <Grid area="board">
        <Board></Board>
      </Grid>
      <HandGrid area="hand">
        <SubmitHand>Submit Hand</SubmitHand>
        <Hand
          cards={cards}
          onSelect={setCards}
          ></Hand>
      </HandGrid>
    </StyledDiv>
  )
}
export default Game;

// Styling

const StyledDiv = styled.div`
  display:grid;
  grid-template: "next state" auto
                 "points board" 1fr
                 "chat board" 2fr
                 "hand hand" 1fr
                 / 3fr 7fr;
  height: 100vh;
`
const Next = styled.button`
  grid-area: next;
`
const State = styled.p`
  grid-area: state;
  align-self: center;
  justify-self: center;
`

const Grid = styled.div`
  grid-area: ${(props) => props.area};
`

const HandGrid = styled(Grid)`
  display:grid;
  grid-template-rows: auto 1fr;
`

const SubmitHand = styled.button`

`
