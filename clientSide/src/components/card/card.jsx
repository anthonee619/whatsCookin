// import React { Component } from 'react';
import React from 'react';
import styled from 'styled-components';

const Card = ({ card, onSelect, selected}) => {
  return (
    <CardStyle
      src={require('../../imgs/' + card.img)}
      alt={card.path}
      selected={selected}
      onClick={() => onSelect(card)}/>
  )
}

export default Card;
// // Css Styles
const CardStyle = styled.img `
background: ${props=> props.selected === 1? "blue" : "none"};
padding: 1px;
border-radius: 0.5em;
height: 90%;

&:hover {
  height: 92%;
}

`;
