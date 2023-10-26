import React from 'react';
import { styled } from '@mui/system'; 

const PositionBadge = styled('div')({
    position: 'absolute',
    transform: 'rotate(20deg)',
    bottom: 90, 
    right: 20,
    fontSize: '70px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Bungee Spice',
    zIndex: 3
});

const Position = ({ position }) => {
    return (
        <PositionBadge>
            <link href="https://fonts.googleapis.com/css2?family=Bungee+Spice&display=swap" rel="stylesheet" />
            { position }
        </PositionBadge>
    );
};

export default Position; 