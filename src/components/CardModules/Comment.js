import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/system';
import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';
import * as GiIcons from "react-icons/gi";

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

const MessageContainer = styled(Box)({
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "flex-end",
  flexDirection: "row",
  margin: "10px 0"
});

const SenderIcon = styled('div')({
  flex: 1,
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  marginLeft: "10px",
  backgroundColor: "#ddd", /* 임시 배경색. 실제로는 이미지를 사용하면 됩니다. */
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  fontSize: "25px"
})

const MessageBubble = styled('div')({
  flex: 10,
  padding: "10px 20px",
  borderRadius: "20px",
  background: "linear-gradient(145deg, #1c2a48, #283759)",
  boxShadow:  "5px 5px 10px #1c2a48, -5px -5px 10px #3a4a6a",
  maxWidth: "70%",
  whiteSpace: "pre-line",
  color: "white",
  fontSize: "15px"
})

const Comment = ({ comment, commentStyle, icon }) => {
  if (comment === undefined) return null;


  // 나중에 props로 받을 부분들
  if (commentStyle === undefined) {
    commentStyle = 
    '[{"fontSize":"11.9px"},{"fontSize":"21px"}]'
  }

  if (icon === undefined) {
    icon = "FaBookOpen"
  }

  const lines = comment.split('\n');
  const styles = JSON.parse(commentStyle);

  return (
    <>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Dongle&display=swap" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=East+Sea+Dokdo&display=swap" />

      <MessageContainer>
        <MessageBubble>
          {lines.map((line, index) => (
            <div key={index} style={styles[index]}>
              {line}
            </div>
          ))}
        </MessageBubble>
        <SenderIcon><DynamicIcon iconName={icon} /></SenderIcon>
      </MessageContainer>
    </>
  );
};

export default Comment;