import React from 'react';
import ReactLoading from 'react-loading';
import styled from 'styled-components';

const Pick = ({round}) => {
  if (round === 2) {
    return (
      <div>
        <h3>Players are currently picking their hands</h3>
        <ReactLoading type={'bars'} color={'black'} height={'1em'}/>
      </div>
    );
  }
  return null;
}
export default Pick;
