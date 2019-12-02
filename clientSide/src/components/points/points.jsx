import React from 'react';
import styled from 'styled-components';

const Points = ({ points }) => {
  return (
    <PointsStyle>
      <h3>Leaderboard</h3>
      {points.map(point=>(
        <Point>{point.player} score: {point.score}</Point>
      ))}
    </PointsStyle>
  )
};
export default Points;

const PointsStyle = styled.div`
  display:grid;
`

const Point = styled.p`
  size: 20px;
  margin-bottom: 1vh;
  margin-left: 3vw;
`
