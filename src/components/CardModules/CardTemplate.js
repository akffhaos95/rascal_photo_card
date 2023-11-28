import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { styled } from '@mui/system'; 

const CardContainer = styled(Card)({
    position: 'relative',
    width: '1050px',
    height: '1629px',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '45px',
    background: '#283759'
});

const CardTemplate = ({ children }) => {
  return (
    <CardContainer>
        <CardContent style={{padding: '0px 48px 48px 48px'}}>
            { children }
        </CardContent>
    </CardContainer>
  );
};

export default CardTemplate;