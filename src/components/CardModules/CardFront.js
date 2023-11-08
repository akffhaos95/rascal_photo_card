import React from 'react';
import CardTemplate from './CardTemplate';
import html2canvas from 'html2canvas';
import { FrontTopBox, FrontBottomBox, Name, Image, Number, BackText1, BackText2 } from './common';
import Position from './Position';
import Sign from './Sign';

const CardFront = ({ player }) => {
  const name = player['이름']
  const number = player['등번호']
  const en_name = player['영어 이름']

  var middleName = en_name.split(" ");

  const onCapture = () => {
		html2canvas(document.getElementById('front')).then(canvas=>{
      var link = document.createElement('a');
      document.body.appendChild(link);
      link.href = canvas.toDataURL('image/png');
      link.download = name+"_front.png";
      link.click();
      document.body.removeChild(link);
		});
	};

  return (
      <div id="front" onClick={onCapture}>
        <CardTemplate>
          <BackText1>{middleName[1]}{middleName[2]}</BackText1> 
          <BackText2>RASCAL</BackText2>
          {/* <Position position={ player['포지션' ]} /> */}

          <Name>{name}</Name>
          <Number>no. {number}</Number>
          <FrontTopBox />
          <Image src={`/image/${name}.png`}/>
          <FrontBottomBox />
          <Sign sign={ player['명대사']} signStyle={ player['명대사 스타일']} />
      
        </CardTemplate>
      </div>
  );
};

export default CardFront;