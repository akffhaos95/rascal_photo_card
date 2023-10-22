import React from 'react';
import { LinearProgress, Chip } from '@mui/material';
import { styled } from '@mui/system';

const ProgressBarContainer = styled('div')({
    display: 'flex',
    alignItems: 'center',
    gap: '10px'
  });
  
const Title = styled(Chip)({
    fontSize: '12px',
    fontWeight: 'bold',
    backgroundColor: '#4b5b7b', // 예: Chip의 배경색
    color: 'white',            // 예: Chip의 글자색
  });
  

const BurningProgress = styled(LinearProgress)({
    flexGrow: 1,
    height: '20px',
    backgroundColor: '#1c2a48',
    borderRadius: '10px',
    '& .MuiLinearProgress-bar': {
        background: 'linear-gradient(145deg, #3a4a6a, #4b5b7b, #3a4a6a)',
        borderRadius: '10px'
    }
});

const ProgressBar = ({ title, score }) => {
    return (
        <ProgressBarContainer>
            <Title label={ title } />
            <BurningProgress variant="determinate" value={50} />
        </ProgressBarContainer>
    )
};

export default ProgressBar;