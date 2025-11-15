import React from 'react';
import { styled } from '@mui/system';

const DividerContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0px',
    gap: '10px',
    width: '100%',
    height: '70px',
    flex: 'none',
    order: 1,
    flexGrow: 0,
});

const StyledDivider = styled('div')({
    width: '100%',
    height: '10px',
    opacity: 0.5,
    backgroundColor: '#FFFFFF', 
    margin: '0',
    borderRadius: '10px'
});

const CustomDivider = () => {
    return (
        <DividerContainer>
            <StyledDivider />
        </DividerContainer>
    );
};

export default CustomDivider;