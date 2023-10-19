import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { styled } from '@mui/system'; 


const CardContainer = styled(Card)({
    position: 'relative',
    width: '350px', // 카드의 너비
    height: '600px', // 카드의 높이를 최대로 유지
    flexDirection: 'column', // 세로로 긴 직사각형 모양
    justifyContent: 'center', // 세로 중앙 정렬
    alignItems: 'center', // 가로 중앙 정렬
    margin: '30px',
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