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

const text = `<div class="speech-container-you"><div class="speech-bubble-you">올 시즌을 마감하면서 남기고 싶은 한마디 있나?</div></div>
<div class="speech-container-me"><div class="speech-bubble-me">저는 하나 밖에 없죠.</div></div>
<div class="speech-container-me"><div class="speech-bubble-me">허리디스크 수술 후 재활 성공</div><div class="speech-bubble-me">나보다 타율 낮은 놈 엎드려</div></div>
<div class="speech-container-me"><div class="speech-bubble-me">신인왕 주세요</div><div class="speech-bubble-me">안동김가 2명 빼고 나보다 타율이 다 낮네</div></div>
<div class="speech-container-me"><div class="speech-bubble-me">진짜 열심히 뛴 것 맞습니다</div></div>
-전혀 하나가 아니었음
2023.10.26. 갠톡 中`

const tmp = `[{"fontSize":"12px"},
{"fontSize":"12px"},
{"fontSize":"12px"},
{"fontSize":"12px"},
{"fontSize":"12px"},
{"fontSize":"15px"},
{"fontSize":"13px"}]`
  
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