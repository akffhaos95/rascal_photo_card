import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { styled } from '@mui/system'; 

const CardContainer = styled(Card)({
    position: 'relative',
    width: '350px',
    height: '543px',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '15px',
    background: '#283759'
});

const CardTemplate = ({ children }) => {
  return (
    <CardContainer>
        <CardContent>
            { children }
        </CardContent>
    </CardContainer>
  );
};

export default CardTemplate;