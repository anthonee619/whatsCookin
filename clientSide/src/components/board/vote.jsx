import React from 'react';
import styled from 'styled-components';

const Vote = ({ round }) => {
  if (round !== 3) {
    return null;
  } else {
    return <h1 > vote < /h1>;
  }
}
export default Vote;