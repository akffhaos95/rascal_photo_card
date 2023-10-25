import React from 'react';
import CardTemplate from './CardTemplate';
import html2canvas from 'html2canvas';
import { PlayerBox0, PlayerBox1, PlayerBox2, SignBox0, SignBox1, SignBox2, Sign, Rascal, Name, Image, Number, BackText1, BackText2 } from './common';

export const SignBox = ({ sign }) => {
  console.log("명대사 = " + sign)

  return (
      <SignBox0>
          <SignBox1>
          </SignBox1>
          <SignBox2>
              <Sign>{ sign }</Sign>
          </SignBox2>
      </SignBox0>            
    );
};

export const PlayerBox = ({ name }) => {
  return (
      <PlayerBox0>
          <PlayerBox1>
          <Rascal>RASCAL</Rascal>
          </PlayerBox1>
          <PlayerBox2>
              <Name>{ name }</Name>
          </PlayerBox2>
      </PlayerBox0>            
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
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Chakra+Petch&display=swap"/>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Monoton&display=swap" />
        <CardTemplate>
          {/* <SignBox sign = { player['명대사'] }/> */}
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