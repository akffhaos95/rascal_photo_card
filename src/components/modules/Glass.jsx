import React from 'react';
import { styled } from '@mui/system';

const GlassContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '16px',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(7px)',
    WebkitBackdropFilter: 'blur(7px)',
    padding: '20px',
    width: '950px',  // 고정 가로 길이
    height: 'auto', 
});

const Glass = ({ children }) => {
    return <GlassContainer>{children}</GlassContainer>;
};

export default Glass;