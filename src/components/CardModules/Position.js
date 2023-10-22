import React from 'react';
import { Avatar } from '@mui/material';
import { styled } from '@mui/system'; 

const positionColors = {
    P: 'red',
    LF: 'linear-gradient(0deg, #F5F5F5, #141E30)',
    CF: 'blue',
};

const PositionBadge = styled(Avatar)(({ position }) => ({
    background: 'white',
    width: '48px',
    height: '48px',
    fontSize: '35px', // 포지션 텍스트의 글꼴 크기
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',

    border: `2px solid transparent`,
    backgroundClip: 'content-box',
    backgroundImage: `linear-gradient(to bottom, #B8860B 20%, #FFDEAD, #B8860B)`,
}));

const Position = ({ position }) => {
    return (
        <PositionBadge position={position}>
            { position }
        </PositionBadge>
    );
};

export default Position; 