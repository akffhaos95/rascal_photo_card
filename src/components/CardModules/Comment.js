import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/system';

const CommentBox = styled(Box)({
    position: 'relative',
    background: 'rgba(0, 0, 0, 0.2)', // 투명한 배경 (rgba를 사용하여 투명도 조절)
    height: '120px', // 높이 설정
    border: '2px solid #fff', // 테두리 설정
  });  

const CommentText = styled('p')({
    color: '#ffffff'
})

const Comment = ({ comment, style }) => {
  return (
    <CommentBox>
        <CommentText>
            { comment }
        </CommentText>
    </CommentBox>
  );
};

export default Comment;