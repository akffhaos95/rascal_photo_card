import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/system';
import * as Icons from 'react-icons/fa';

function DynamicIcon({ iconName }) {
  const IconComponent = Icons[iconName];

  if (!IconComponent) {
    return null;
  }

  return <IconComponent />;
}

const MessageContainer = styled(Box)({
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "flex-end",
  flexDirection: "row",
  margin: "10px 0"
});

const SenderContainer = styled(Box)({
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "flex-start",
  flexDirection: "row",
  margin: "20px 0 10px 0"
});


const SenderIcon = styled('div')({
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  marginLeft: "10px",
  marginRight: "10px",
  backgroundColor: "#ddd",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
})

const MessageBubble = styled('div')({
  padding: "10px 20px",
  borderRadius: "20px",
  background: "linear-gradient(145deg, #1c2a48, #283759)",
  boxShadow:  "5px 5px 10px #1c2a48, -5px -5px 10px #3a4a6a",
  maxWidth: "90%",
  whiteSpace: "pre-line",
  color: "white",
})

// // 1. 텍스트 데이터 파싱
// function parseStyleText(styleText) {
//   const styleArray = styleText.split(';');
//   const styleObject = {};

//   styleArray.forEach(item => {
//     const [property, value] = item.split(':');
//     if (property && value) {
//       styleObject[property.trim()] = value.trim();
//     }
//   });
//   return styleObject;
// }

// // 예제: 엑셀에서 가져온 스타일 텍스트
// const excelStyleText = "font-family:Roboto;font-size:16px;color:#283759;";

// // 2. 객체로 변환
// const parsedStyle = parseStyleText(excelStyleText);

// // 3. 스타일 적용
// const MessageBubble = styled.div(parsedStyle);

const Comment = ({ comment, sign }) => {
  const [sendSize, setSendSize] = useState(12); // 초기 폰트 크기
  const [receivevSize, setReceiveSize] = useState(12); // 초기 폰트 크기

  const SendBubble = styled(MessageBubble)({
    textAlign: "left",
    fontSize: sendSize
  })

  const ReceiveBubble = styled(MessageBubble)({
    textAlign: "right",
    fontSize: receivevSize
  })

  useEffect(() => {
    function getFontSize(text) {
      if (text !== undefined) {
        const lines = text.split('\n');
        const maxLength = Math.max(...lines.map(line => line.length));
        console.log(maxLength)
        if (maxLength > 40) return 8;
        else if (maxLength > 25) return 10;
        else if (maxLength > 20) return 12;
        else return 14;
      }
    }

    console.log(comment)
    setReceiveSize(getFontSize(comment))
    setSendSize(getFontSize(sign))
  }, [comment, sign]);

  

  return (
    <>
      <MessageContainer>

        <SendBubble>{ comment }</SendBubble>
        <SenderIcon><DynamicIcon iconName={"FaMouse"} /></SenderIcon>
      </MessageContainer>

      <SenderContainer>
        <SenderIcon><DynamicIcon iconName={"FaMouse"} /></SenderIcon>
        <ReceiveBubble>{ sign }</ReceiveBubble>
      </SenderContainer>
    </>
  );
};

export default Comment;