import React from 'react';
import CardTemplate from './CardTemplate';
import html2canvas from 'html2canvas';
import { FrontTopBox, FrontBottomBox, Image, BackText1, BackText2 } from './common';
import Sign from './Sign';
import NameBox from './NameBox';

const CardFront = ({ player }) => {
  const name = player['이름']
  const number = player['등번호']
  const en_name = player['영어 이름']
  const position = player['포지션']
  const award = player['어워즈']

  function setImagebyName() {
    if (name === "김형준") {
      if (position === "P") {
        return name+"_투수"
      } else {
        return name+"_타자"
      }
    } else {
      return name
    }
  }
  
  var middleName = en_name.split(" ");

  return (
      <div id="front" > 
        <CardTemplate>
          <BackText1>{middleName[1]}{middleName[2]}</BackText1> 
          <BackText2>RASCAL</BackText2>
          <FrontTopBox />
          <NameBox name={name}  number={number} position={position} award={award}/>
          <Image src={`${process.env.PUBLIC_URL}/image/${setImagebyName()}.png`}/>
          <FrontBottomBox />
          <Sign sign={ player['명대사']} signStyle={ player['명대사 스타일']} />
        </CardTemplate>
      </div>
  );
};

export default CardFront;