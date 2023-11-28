import { Box } from '@mui/material';
import { styled } from '@mui/system'; 

// SignBox
export const SignBox = styled('div')({
    backgroundColor: '#283759',
    padding: '15px 15px',
    border: '9px solid #ffffff',
    boxShadow: '0 0 60px rgba(0, 0, 0, 0.5)',
    borderRadius: '45px',
    fontFamily: "'Poor Story', serif",
    color: '#F0E5C9',
    fontSize: '36px',
    textAlign: 'center',
    lineHeight: '1.3',
    
    margin: "36.9px",
    marginBottom: "30px",
    width: "930px",
    position: "absolute",
    bottom:0,
    left:0,
    zIndex: 3,
})

export const FrontTopBox = styled(Box)({
    width: '1800px',
    height: '300px',
    background: '#141E30',
    transform: 'rotate(-25deg)',
    position: 'absolute', 
    top: 90,
    left: -150,
})

export const FrontBottomBox = styled(Box)({
    width: '1800px',
    height: '300px',
    background: '#141E30',
    transform: 'rotate(-25deg)',
    position: 'absolute', 
    bottom: 300,
    left: -150,
})

export const Image = styled('img')({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: 'auth',
    zIndex: 2,
});

export const BackText1 = styled('div')({
    transform: 'rotate(270deg)',
    fontFamily: 'Monoton',
    fontSize: '300px',
    position: 'relative',
    top: '700px',
    right: '300px',
    color: '#A9A9A9',
    zIndex: 1
})

export const BackText2 = styled('div')({
    transform: 'rotate(90deg)',
    fontFamily: 'Monoton',
    fontSize: '300px',
    position: 'relative',
    bottom: '180px',
    left: '300px',
    color: '#A9A9A9',
    zIndex: 1,
})

export const MessageContainer = styled(Box)({
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    flexDirection: "row",
    padding: "21px 0px 0px 0px"
});

export const MessageBubble = styled('div')({
    flex: 10,
    padding: "15px 60px",
    borderRadius: "60px",
    background: "linear-gradient(145deg, #1c2a48, #283759)",
    boxShadow:  "15px 15px 30px #1c2a48, -15px -15px 30px #3a4a6a",
    maxWidth: "100%",
    maxHeight: "10%",
    whiteSpace: "pre-line",
    color: "white",
    fontFamily: "Poor Story",
    fontSize: "48px",
    textAlign: "center",
})