import React from 'react';
import { MessageContainer, MessageBubble } from './common';
import ReactHtmlParser from 'react-html-parser';

const Comment = ({ comment, commentStyle }) => {
  if (comment === undefined) return null;

  // 나중에 props로 받을 부분들
  if (commentStyle === undefined) {
    commentStyle = 
    `[]`
  }

const text = `피지컬이나 건강 부분에서 걱정이 많은 선수입니다.
가장 가벼운 배트를 사용함에도 휘둘려버리는 약한 근력.
숨이 차면 드러누워야하고 회복도 더딥니다.
ㅤ
하지만 수비 능력은 팀에서 크게 인정받고 있습니다.
22년에는 최우수 수비상을 두고 다투었을 정도이니까요.
ㅤ
하지만 리그 수준이 높아지는 올해에는 삼진이 많아지고
"걸어다니는 아웃카운트" 라는 불명예를 안게 됩니다.
ㅤ
24년에는 기초적인 체력과 피지컬을 단련하여
운동신경에 걸맞는 하드웨어를 만들어 
반등을 노립니다.
`

const tmp = `[{"fontSize":"15px"},
{"fontSize":"13.7px"},
{"fontSize":"15px"},
{"fontSize":"5px"},
{"fontSize":"14.5px"},
{"fontSize":"13.5px"},
{"fontSize":"5px"},
{"fontSize":"13.7px"},
{"fontSize":"14.4px"},
{"fontSize":"5px"},
{"fontSize":"16px"},
{"fontSize":"17px"},
{"fontSize":"17px"}]
`

  const lines = comment.split('\n');
  const styles = JSON.parse(commentStyle);

  return (
    <MessageContainer>
      <MessageBubble>
        {lines.map((line, index) => (
          <div key={index} style={styles[index]}>
            {ReactHtmlParser(line)}
          </div>
        ))}
      </MessageBubble>
    </MessageContainer>
  );
};

export default Comment;