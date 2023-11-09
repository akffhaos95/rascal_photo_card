import React from 'react';
import { styled } from '@mui/system';
import { Typography, Box } from '@mui/material';

const FooterBox = styled(Box)({
  backgroundColor: '#283759', // 배경색 설정
  color: 'white',
  padding: '10px 0',
  position: 'fixed',
  bottom: 0,
  width: '100%',
  zIndex: 50
});
const Footer = () => {
  return (
    <FooterBox>
      <Typography variant="body2" align="center">
        © 2023 Rascal
      </Typography>
    </FooterBox>
  );
};

export default Footer;