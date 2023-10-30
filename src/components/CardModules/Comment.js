import React from 'react';
import { MessageContainer, SenderIcon, MessageBubble } from './common';
import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';
import * as GiIcons from "react-icons/gi";
import ReactHtmlParser from 'react-html-parser';

const iconPackages = [FaIcons, SiIcons, GiIcons]; 

function DynamicIcon({ iconName }) {
  let IconComponent;

  for (const pkg of iconPackages) {
    if (pkg[iconName]) {
      IconComponent = pkg[iconName];
      break;
    }
  }

  if (!IconComponent) return null;
  return <IconComponent />;
}

const Comment = ({ comment, commentStyle, icon }) => {
  if (comment === undefined) return null;

  // 나중에 props로 받을 부분들
  if (commentStyle === undefined) {
    commentStyle = 
    `[{"fontSize":"13px"} 
  ]`
  }

  const text = `탈주닌자.. 아니, 탈주 선수가 되었으니 다른 사회인 야구팀에 들어가 리그에서 만나기만 한다면
  드라마 한편이 뚝딱입니다. 써클렛.. 아니, 아우들이 선물해준 하이바에 줄 하나 그어주세요.
  ㅤ
  맹렬한 달리기의 끝에 감동적인 당신의 만세를 기억합니다. 물론 주루나 타법이 아닌 수비였지만요.
  이 사실은 저희 팀만 알고 있을테니 너무 걱정마세요.
  ㅤ
  일요일 단 하루 만큼은. 라스칼의 야구선수였던 당신의 지난 플레이에 찬사를 보냅니다. 
  1루, 2루,3루를 지나 홈으로 돌아오는 그날까지 
  당신의 모든 전력질주는 팀을 나가도 여전히 모두가 응원할 것입니다.
  ㅤ
  "빠따 파이팅."
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
      <SenderIcon><DynamicIcon iconName={icon} /></SenderIcon>
    </MessageContainer>
  );
};

export default Comment;