import React from 'react';
import { Card, Box, Avatar, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const NameContainer = styled(Card)({
    flex: 5,
    backgroundColor: '#283759',
    border: '3px solid #B8860B',
    boxShadow: 'inset 0 0 10px rgba(0, 0, 0, 0.5)',
    borderRadius: '15px',
    height: '30px',
    color: '#F0E5C9',
    textAlign: 'center',
});

const PositionAvatar = styled(Avatar)({
  width: '34px',
  height: '33px',
  marginRight: '7px',
  background: 'linear-gradient(45deg, #283759 30%, #486581 90%)',
  border: '2px solid #DAA520',
  color: 'white',
});

const Award = styled('img')({
    width: '90px',
    height: '90px',
});
  

function NameBox({ name, number, position, award }) {
  const PlayerContainer = styled('div')({
    position: "absolute",
    top:0,
    left:0,
    zIndex: 3,
    padding: '5px 5px',
    margin: award !== undefined ? "3px 3px 2.3px 12.3px" : "3px 12.3px",   
    width: award !== undefined ? "330px" : "310px",
    display: 'flex',
  });

  return (
    <PlayerContainer>
      <PositionAvatar>{position}</PositionAvatar>

      <NameContainer>
          <Typography variant="h6" style={{ fontWeight: 'bold' }}>
            {number}.{name}
        </Typography>
      </NameContainer>

      {award !== undefined ? <Award src={`${process.env.PUBLIC_URL}/image/${award}.png`} /> : null} 
    </PlayerContainer>
  );
}

export default NameBox;