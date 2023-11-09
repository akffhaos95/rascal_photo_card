import React from 'react';
import { SignBox } from './common';
import ReactHtmlParser from 'react-html-parser';

const Sign = ({ sign, signStyle }) => {
  if (sign === undefined) return null;
  if (signStyle === undefined) signStyle = '[]'

const text = `살 수 있다! 너는 산다! 뛰어! 뛰어! 4번이다!
ㅤ
누구보다 목소리 높여 응원하고 팀원으로서 시합에 몰입했습니다
올 시즌 임지헌 선수의 응원들은 
무엇 하나 빠트릴 수 없을 정도로 가치 높았습니다.
열정으로  훈련하며 최근 하나의 벽을 뛰어 넘었습니다.
다음 시즌에는 주축 스타팅 선수로 자리할 수 있길 바랍니다.`

const tmp = `[{"fontSize":"23px", "fontFamily":"Nanum Brush Script"},
{"fontSize":"5px"},
{"fontSize":"13.3px"},
{"fontSize":"15px"},
{"fontSize":"15px"},
{"fontSize":"14.3px"}]`
  
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