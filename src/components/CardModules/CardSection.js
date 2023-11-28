import React from 'react';
import CardFront from './CardFront';
import CardBack from './CardBack';
import { styled } from '@mui/system';

const Container = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  margin: '30px',
  padding: '30px 0px 150px 30px',
  background: "#283759",
  flexWrap: 'wrap'
});

const CardSection = ({ player, batter, pitcher }) => {
  
  if (player === null) return null;

  return (
    <Container>
        <CardFront id="front" player = { player } />
        <div style={{ height: '20px', width: '5%' }}></div>
        <CardBack id="back" player = { player } data= { player['포지션']==="P" ? pitcher : batter }/>
    </Container>
  );
};

export default CardSection;