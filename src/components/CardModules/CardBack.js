import React from 'react';
import CardTemplate from './CardTemplate';
import RadarChart from './RadarChart';
import Comment from './Comment';
import html2canvas from 'html2canvas';
import ProgressBarTemplate from './ProgressBarTemplate';

const CardBack = ({ player, data }) => {
  const playerData = data.find((item) => item.이름 === player.이름);

  return (
    <div id="back" >
      <CardTemplate>
        <RadarChart score = { playerData } att = { player['특수 항목'] } attScore = { player['특수 항목 점수'] } />
        <ProgressBarTemplate title = { player['포지션']==="P" ? "WHIP" : "V.C" } score = { player['포지션']==="P" ? playerData['WHIP'] : playerData['V.C'] } /> 
        <Comment comment = {player['코멘트']} commentStyle = {player['코멘트 스타일']} />
      </CardTemplate>
    </div>
  );
};

export default CardBack;