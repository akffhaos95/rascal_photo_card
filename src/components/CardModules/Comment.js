import React from 'react';
import { MessageContainer, SenderIcon, MessageBubble } from './common';
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