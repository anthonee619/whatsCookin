import React, { Component } from 'react';
import styled from 'styled-components';

class Card extends Component {
  render() {
    const { fileName, name } = this.props.card.ingredient;
    return (
      <CardStyle
      onClick={() => this.props.onSelect(this.props.card)}
      selected= {this.props.selected}
      src= {require('../imgs/'+ fileName)} alt={name}/>
    )
  }

}
export default Card;


// Css Styles

const CardStyle = styled.img `
width: 40%;
background: ${props=> props.selected };
padding: 1px;
border-radius: 0.5em;

&:hover {
  width:50%;
}

`;
