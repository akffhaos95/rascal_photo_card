import React from 'react';
import CardTemplate from './CardTemplate';
import html2canvas from 'html2canvas';
import { Box0, Box1, Box2, Rascal, Name, Image, Number, BackText1, BackText2 } from './common';

export const PlayerBox = ({ name }) => {
  return (
      <Box0>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Chakra+Petch&display=swap"/>
          <Box1>
          <Rascal>RASCAL</Rascal>
          </Box1>
          <Box2>
              <Name>{ name }</Name>
          </Box2>
      </Box0>            
    );
};

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
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Monoton&display=swap" />
          <BackText1>{middleName[1]}{middleName[2]}</BackText1> 
          <BackText2>RASCAL</BackText2> 
          <Image src={`/image/${name}.png`}/>
          <PlayerBox name={name}/>
          <Number>no. {number}</Number>
        </CardTemplate>
      </div>
  );
};

export default CardFront;