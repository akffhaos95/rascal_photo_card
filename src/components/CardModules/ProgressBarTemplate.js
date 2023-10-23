import React from 'react';
import { LinearProgress, Box, Typography } from '@material-ui/core';
import { styled } from '@mui/system';

const CustomLinearProgress = styled(LinearProgress)({
    height: '12px',
    borderRadius: '6px',
    backgroundColor: '#E0E0E0',
    flex: 1,
    '& .MuiLinearProgress-bar': {
        borderRadius: '6px',
        // backgroundColor: '#2196F3',
        backgroundImage: 'linear-gradient(90deg, #ff4500, #ff8c00, #ff4500)',  // <-- 불타는 느낌의 그래디언트 추가
        // backgroundRepeat: 'no-repeat', 
        // backgroundSize: 'cover'
    },
});
  
const ProgressBarContainer = styled('div')({
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    gap: '10px',
});
  
const TitleLabel = styled('span')({
    color: '#555',
});
  

const ProgressBarTemplate = ({ title, score }) => {
  return (
    <ProgressBarContainer>
      <TitleLabel>{ title }</TitleLabel>
      <CustomLinearProgress variant="determinate" value={score} />
    </ProgressBarContainer>
  );
};


export default ProgressBarTemplate;