import React from 'react';
import CardTemplate from './CardModules/CardTemplate';
import { styled } from '@mui/system';
import PlayerBox from './CardModules/PlayerBox';
import html2canvas from 'html2canvas';

const Image = styled('img')({
  position: 'absolute',
  top: 0,
  left: 0,
  width: 'auto',
  height: 'auto',
  zIndex: 0,
});

const Number = styled('div')({
  fontFamily: 'Chakra Petch, Chakra Petch',
  fontSize: '60px',
  position: 'absolute',
  bottom: 0,
  right: 20, 
  color: 'white',
  fontWeight: 'bold'
});

const BackText1 = styled('div')({
  transform: 'rotate(270deg)',
  fontFamily: 'Monoton',
  fontSize: '100px',
  position: 'relative',
  top: '250px',
  right: '100px',
  color: 'white'
})

const BackText2 = styled('div')({
  transform: 'rotate(90deg)',
  fontFamily: 'Monoton',
  fontSize: '100px',
  position: 'relative',
  bottom: '60px',
  left: '100px',
  color: 'white'
})

const CardFront = ({ name, number, en_name }) => {
  
  var middleName = "";
  if (en_name !== undefined) { 
    middleName = en_name.split(" ");
  } else {
    middleName = ["", "TMP",""]
  }

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