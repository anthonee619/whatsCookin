import React from 'react';
import Card from '../card/card';
import styled from 'styled-components';

const Hand = ({ cards, onSelect }) => {

  const select = (card) => {
      let newCards = [...cards];
      let index = newCards.indexOf(card);
      newCards[index].selected = card.selected===1?0:1;
      onSelect(newCards);
  }

  return (
    <StyleHand>
      <StyleCard
        length={cards.length}>
        {cards.map(card => (
          <Card key={card.id}
            card = {card}
            selected = {card.selected}
            onSelect= {select}
            />

        ))}
      </StyleCard>
    </StyleHand>

  )
}
export default Hand;

//css

const StyleHand = styled.div `
  min-height: 0;
  height:100%;
`
const StyleCard = styled.div`
  grid-area: card;
  display:grid;
  grid-template-columns: repeat(${props => props.length}, 1fr);
  justify-items:center;
  height: 100%;
`
