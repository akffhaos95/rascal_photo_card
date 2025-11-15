import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { styled } from '@mui/system'; 

const CardContainer = styled(Card)({
    position: 'relative',
    display: 'flex',
    width: '1050px',
    height: '1629px',
    padding: '80px 17px',
    gap: '10px',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '45px',
    background: 'linear-gradient(180deg, #0A1A39 0%, #00356F 100%)'

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