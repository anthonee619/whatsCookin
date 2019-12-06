import React, {useState, useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import queryString from 'query-string';
import io from 'socket.io-client';
import Hand from '../hand/hand';
import Chat from '../chat/chat';
import Board from '../board/board';
import Points from '../points/points';
import styled from 'styled-components';

const meals = ['breakfast', 'lunch', 'dinner'];
const buttonStates = ['', 'Send Hand to another player', 'Submit Hand', 'Vote for player']

let socket;

const Game = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [isHost, setIsHost] = useState('');
  const [clicked, setClicked] = useState(false);
  const [players, setPlayers] = useState([]);
  const [playerHands, setPlayerHands] = useState([]);
  const [gameState, setGameState] = useState({day: 1, meal: 0, round: 0});
  const [points, setPoints] = useState([])
  const [cards, setCards] = useState([]);
  const [description, setDescription] = useState('');
  const ENDPOINT = "localhost:5000";

  let location = useLocation();

  useEffect(() => {
    setPoints([{player: "Roland", score: 100000}, {player: "Alice", score: 42069}, {player: "Roselle", score: 20},])
    const {name, room, isHost} = queryString.parse(location.search);
    socket = io(ENDPOINT);
    setName(name);
    setRoom(room);
    setIsHost(isHost);

    socket.emit('lobby join', name, (err) => {
      if (err) {
        console.log(err);
      }
    });

    if(isHost === 'true') {
      socket.emit('host game', room);
    } else {
      socket.emit('join game', room);
    }

    socket.emit('request players')

    socket.on('response players', playerList => {
      setPlayers(playerList);
    });

    socket.on('game state', state => {
      setGameState(state);
    })


    return () => {
      socket.emit('disconnect');
      socket.off();
    }

  }, [ENDPOINT, location.search]);

  useEffect(()=> {
    socket.on('new player', playerList => {
      setPlayers(playerList);
    });

    socket.on('deal cards', hand => {
      setCards(JSON.parse(hand));
    })

    socket.on('game state', state => {
      setGameState(state);
    }, [players, cards, gameState])

    socket.on('player hands', playerHands => {
      setPlayerHands(playerHands)
    })
  },[players, cards, gameState]);

  const startGame = () => {
    if (!clicked) {
      console.log("Starting game and not clicked")
      socket.emit('start game')
      setClicked(true);
    }
  }

  const sendCards = () => {
    let hand = cards.filter((card)=>card.selected );

    if (gameState.round === 1) {
      // send hand to barter;
    } else if (gameState.round === 2) {
      console.log("sending hand in round 2")
      socket.emit('set play hand', JSON.stringify(hand), description);
    } else if (gameState.round === 3) {
      // voting stage
    } else {
      // do nothing
    }
  }

  const nextRound = () => {
    //calculate selected on people
    if(gameState.round === 1) {
      socket.emit('set done bartering', true)
    }
    else if (gameState.round === 3) {
      // socket.emit('vote hand', )
    }

  }

  return (
    <StyledDiv>
      <State>
        Day: {gameState.day} currently having {meals[gameState.meal]}
      </State>
      {(isHost==='true') ? <Start onClick={startGame}>Start Game</Start> : <span></span> }
      <Grid>
        <Points area="points" points={points}></Points>
      </Grid>
      <Grid area="chat">
        <Chat ></Chat>
      </Grid>
      <Grid area="board">
        <Board
          nextRound={nextRound}
          players={players}
          playerHands={playerHands}
          round = {gameState.round} ></Board>
      </Grid>
      <HandGrid area="hand">
        {(gameState.round === 2) ? (
        <StyledInput placeholder="Explain your dish!"></StyledInput>
        ): null}
        <SubmitHand
          onClick={sendCards}>
          {buttonStates[gameState.round]}
        </SubmitHand>
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
  width: 98vw;
  margin: auto;
`
const Start = styled.button`
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
  grid-template-rows: auto auto 1fr;
`

const SubmitHand = styled.button`
  height: 2em;
`

const StyledInput = styled.input`
  text-align:center;
  height: 2em;
`
