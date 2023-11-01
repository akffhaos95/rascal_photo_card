import React from 'react';
import CardTemplate from './CardTemplate';
import RadarChart from './RadarChart';
import Comment from './Comment';
import html2canvas from 'html2canvas';
import ProgressBarTemplate from './ProgressBarTemplate';
import Sign from './Sign';

const CardBack = ({ player, data }) => {
  const onCapture = () => {
		html2canvas(document.getElementById('back')).then(canvas=>{
      var link = document.createElement('a');
      document.body.appendChild(link);
      link.href = canvas.toDataURL('image/png');
      link.download = player["이름"]+"_back.png";
      link.click();
      document.body.removeChild(link);
		});  
	};

  const playerData = data.find((item) => item.이름 === player.이름);

  return (
    <div id="back" onClick={onCapture}>
      <CardTemplate>
        {/* <Sign sign={ player['명대사']} signStyle={ player['명대사 스타일']} /> */}
        <RadarChart score = { playerData } att = { player['특수 항목'] } attScore = { player['특수 항목 점수'] } />
        <ProgressBarTemplate title = { player['포지션']==="P" ? "WHIP" : "V.C" } score = { player['포지션']==="P" ? playerData['WHIP'] : playerData['V.C'] } /> 
        <Comment comment = {player['코멘트']} commentStyle = {player['코멘트 스타일']} />
      </CardTemplate>
    </div>
  );
};

export default CardBack;