import React, { Component } from 'react';
import Card from './card';
import Ingredient from '../classes/ingredient.js';
import styled from 'styled-components';

class Hand extends Component {
  state = {
    cards: [
      {selected: 0, ingredient: new Ingredient(1, "avocado")},
      {selected: 1, ingredient: new Ingredient(2, "bread")},
      {selected: 0, ingredient: new Ingredient(3, "butter")},
    ]
  }

  render() {
    return (
      <StyleHand >
        <StyleSubmit
          className="btn btn-primary"
          onClick={this.handleSubmit}
        >
        Submit Hand
        </StyleSubmit>
        <StyleCard>
          {this.state.cards.map(card => (
            <Card key={card.ingredient.key}
              card = {card}
              selected = {card.selected===0?"none":"blue"}
              onSelect = {this.onSelect}
              />
          ))}
        </StyleCard>
      </StyleHand>
    );
  };

  handleSubmit= () => {
    //Sends hand to the express server
    console.log("Sending Hand to the server");
    let test = this.state.cards.filter(s => s.selected === 1);
    console.log(test);
  }

  onSelect = card => {
    const cards = [...this.state.cards];
    const index = cards.indexOf(card);
    cards[index] = {...card};
    cards[index].selected = card.selected===0?1:0;
    this.setState({cards});
  }
}
export default Hand;

//css

const StyleHand = styled.div `
  display: grid;
  // grid-template-rows: 5vh 20vh;
  grid-template-areas: "submit" "card";
  grid-gap: 1rem;
  width: 100vw;
`

const StyleSubmit = styled.button `
  grid-area: submit;
`

const StyleCard = styled.div`
  grid-area: card;
  display:grid;
  grid-template-columns: repeat(5, 1fr);
  justify-items:center;
`

// Notes on how a hand worker
/*
Send cards to the server
recieve cards to the server
*/
