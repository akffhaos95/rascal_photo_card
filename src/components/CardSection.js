import React, { useRef } from 'react';
import CardFront from './CardFront';
import CardBack from './CardBack';
import { styled } from '@mui/system';

const Container = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  margin: '10px'
});

// 선수 정보 받아와서 카드 2개로 보내는 창
const CardSection = ({ player, batter, pitcher }) => {
  
  if (player === null) {
    return null; // 데이터가 null인 경우 렌더링하지 않음
  }

  return (
    <Container>
        <CardFront id="front" en_name={ player['영어 이름']} name = { player['이름'] } number = { player['등번호'] } />
        <CardBack id="back" player = { player } data= { player['포지션']==="P" ? pitcher : batter }/>
        {/* <CardBack pitcher = { player.pitcher } pitcher_add = { player.pitcher_add } comment = { player.comment2 } comment_style = { player.comment2_style }/> */}
    </Container>
  );
};

export default CardSection;