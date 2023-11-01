import React from 'react';
import { SignBox } from './common';
import ReactHtmlParser from 'react-html-parser';

const Sign = ({ sign, signStyle }) => {
  if (sign === undefined) return null;

  // 나중에 props로 받을 부분들
  if (signStyle === undefined) {
    signStyle = '[]'
    console.log("style null")
  }

const text = `형님..! 맏형으로서 부디 선수들 정신 차리라 
따끔히 한마디 부탁드립니다!
ㅤ
"아이구.. 저부터 열심히 정신차려가 해야죠.."
ㅤ
(모두가 웃는다.)
ㅤ
-2023.10.29. 경기가 끝난 후 반성회 中
<img src="/image/허허.jpg" style="position:absolute; top:0; left:0; width: 100%; height: 100%; opacity: 0.2;" />`

const tmp = `[{"fontSize":"17px", "textAlign":"left"},
{"fontSize":"17px", "textAlign":"left"},
{"fontSize":"5px"},
{"fontSize":"18.5px"},
{"fontSize":"5px"},
{"fontSize":"15px"},
{"fontSize":"5px"},
{"fontSize":"15px"}]`
  
  const lines = sign.split('\n');
  const styles = JSON.parse(signStyle);

  return (
    <SignBox>
      {lines.map((line, index) => (
        <div key={index} style={styles[index]}>
          {ReactHtmlParser(line)}
        </div>
      ))}
    </SignBox>
  );
};

export default Sign;