import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/system';

const MessageContainer = styled(Box)({
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "flex-end",
  flexDirection: "row",
  margin: "10px 0"
});

const SenderIcon = styled('div')({
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  marginLeft: "10px",
  backgroundColor: "#ddd", /* 임시 배경색. 실제로는 이미지를 사용하면 됩니다. */
  backgroundImage: "url(/image/logo.png)", /* 아이콘 이미지 경로 */
  backgroundSize: "cover",
  backgroundPosition: "center",
})

const MessageBubble = styled('div')({
  padding: "10px 20px",
  borderRadius: "20px",
  background: "linear-gradient(145deg, #1c2a48, #283759)",
  boxShadow:  "5px 5px 10px #1c2a48, -5px -5px 10px #3a4a6a",
  maxWidth: "70%",
  color: "white",
  fontSize: "10px"
})

const Comment = ({ comment }) => {
  return (
    <>
      <MessageContainer>
        <MessageBubble>{ comment }</MessageBubble>
        <SenderIcon />
      </MessageContainer>
    </>
  );
};

export default Comment;