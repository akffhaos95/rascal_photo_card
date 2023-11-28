import React from 'react';
import { Card, Box, Avatar, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const NameContainer = styled(Card)({
    flex: 5,
    backgroundColor: '#283759',
    border: '9px solid #B8860B',
    boxShadow: 'inset 0 0 30px rgba(0, 0, 0, 0.5)',
    borderRadius: '45px',
    height: '90px',
    textAlign: 'center',
    color: '#F0E5C9', 
    fontSize: "78px",
    fontFamily: 'Jua',  
});

const PositionAvatar = styled(Avatar)({
  width: '102px',
  height: '99px',
  marginRight: '21px',
  fontFamily: 'ADLaM Display',
  background: 'linear-gradient(45deg, #283759 30%, #486581 90%)',
  border: '6px solid #DAA520',
  color: 'white',
  fontSize: "70px"
});

const Award = styled('img')({
    width: '270px',
    height: '270px',
});
  

function NameBox({ name, number, position, award }) {
  const PlayerContainer = styled('div')({
    position: "absolute",
    top:0,
    left:0,
    zIndex: 3,
    padding: '15px 15px',
    margin: award !== undefined ? "9px 9px 6.9px 36.9px" : "9px 36.9px",   
    width: award !== undefined ? "990px" : "930px",
    display: 'flex',
  });

  return (
    <PlayerContainer>
      <PositionAvatar>{position}</PositionAvatar>

      <NameContainer>
          {number}.{name}
      </NameContainer>

      {award !== undefined ? <Award src={`${process.env.PUBLIC_URL}/image/${award}.png`} /> : null} 
    </PlayerContainer>
  );
}

export default NameBox;