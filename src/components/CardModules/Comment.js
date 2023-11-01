import React from 'react';
import { MessageContainer, MessageBubble } from './common';
import ReactHtmlParser from 'react-html-parser';

const Comment = ({ comment, commentStyle }) => {
  if (comment === undefined) return null;

  // 나중에 props로 받을 부분들
  if (commentStyle === undefined) {
    commentStyle = 
    `[{"fontSize":"13px"} 
  ]`
  }

const text = `2023년은 라스칼의 
선봉대장 김재영의 해였습니다.
ㅤ
1번타자로 출전.
타율 1위, 출루율 1위, 도루 1위, 
득점 1위, V.C 1위
100타석 5할 타자
ㅤ
2023년 Rascal MVP는
김재영 선수입니다.
`

const tmp = `[{"fontSize":"16px"},
{"fontSize":"16px", "textAlign":"right"},
{"fontSize":"5px"},
{"fontSize":"18px"},
{"fontSize":"18px", "textAlign":"center"},
{"fontSize":"18px", "textAlign":"center"},
{"fontSize":"18px", "textAlign":"center"},
{"fontSize":"5px"},
{"fontSize":"19px"},
{"fontSize":"19px", "textAlign":"right"}]`

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