import React from 'react';
import { Avatar } from '@mui/material';
import { styled } from '@mui/system';


const AvatarTag = styled(Avatar)({
    
});

const AvatarTemplate = ({ children }) => {
  return (
    <AvatarTag />        
  );
};

export default AvatarTemplate;