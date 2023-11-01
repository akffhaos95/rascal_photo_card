import { Box } from '@mui/material';
import { styled } from '@mui/system'; 

// SignBox
export const SignBox = styled('div')({
    backgroundColor: '#283759',
    padding: '5px 5px',
    border: '3px solid #ffffff',
    // boxShadow: '0 0 20px rgba(0, 0, 0, 0.5)',
    borderRadius: '15px',
    fontFamily: "'Poor Story', serif",
    color: '#F0E5C9',
    fontSize: '12px',
    textAlign: 'center',
    lineHeight: '1.3',
    
    margin: "12.3px",
    marginBottom: "20px",
    width: "310px",
    position: "absolute",
    bottom:0,
    left:0,
    zIndex: 3,
})

// PlayerBox
export const PlayerBox = ({ name }) => {
    return (
        <PlayerBox0>
            <PlayerBox1>
            {/* <Rascal>RASCAL</Rascal> */}
            </PlayerBox1>
            <PlayerBox2>
                {/* <Name>{ name }</Name> */}
            </PlayerBox2>
        </PlayerBox0>            
    );
};

export const FrontTopBox = styled(Box)({
    width: '600px',
    height: '100px',
    background: '#141E30',
    transform: 'rotate(-25deg)',
    position: 'absolute', 
    top: 30,
    left: -50,
})

export const FrontBottomBox = styled(Box)({
    width: '600px',
    height: '100px',
    background: '#141E30',
    transform: 'rotate(-25deg)',
    position: 'absolute', 
    bottom: 100,
    left: -50,
})


const PlayerBox0 = styled(Box)({
    transform: 'rotate(-25deg)',
    position: 'absolute', 
    top: 330,
    left: -50,
})

const PlayerBox1 = styled(Box)({
    width: '600px',
    height: '100px',
    backgroundColor: 'transparent', 
    position: 'relative' 
})

const PlayerBox2 = styled(Box)({
    width: '600px', 
    height: '300px', 
    background: '#141E30', //'linear-gradient(0deg, #ffffff, #141E30)',
    position: 'relative'
})

const Rascal = styled('div')({
    fontFamily: 'Chakra Petch, Chakra Petch',
    fontSize: '90px',
    position: 'absolute', 
    bottom: -30, 
    left: 100,
    textAlign: 'left', 
    color: '#141E30',
    fontStyle: 'italic',
    fontWeight: 'bold',

    textStroke: "1px #fff"
});

const Name = styled('div')({
    fontFamily: 'Chakra Petch, Chakra Petch',
    fontSize: '50px',
    position: 'absolute', 
    top: 0, 
    left: 100, 
    textAlign: 'left', 
    color: 'white',
    fontStyle: 'italic',
    fontWeight: 'bold'
});

export const Image = styled('img')({
    position: 'absolute',
    top: 0,
    left: 0,
    width: 'auto',
    height: 'auto',
    zIndex: 2,
  });
  
export const Number = styled('div')({
    fontFamily: 'Chakra Petch, Chakra Petch',
    fontSize: '60px',
    position: 'absolute',
    bottom: 0,
    right: 20, 
    color: 'white',
    fontWeight: 'bold'
});

export const BackText1 = styled('div')({
    transform: 'rotate(270deg)',
    fontFamily: 'Monoton',
    fontSize: '100px',
    position: 'relative',
    top: '230px',
    right: '100px',
    color: '#A9A9A9',
    zIndex: 1
})

export const BackText2 = styled('div')({
    transform: 'rotate(90deg)',
    fontFamily: 'Monoton',
    fontSize: '100px',
    position: 'relative',
    bottom: '60px',
    left: '100px',
    color: '#A9A9A9',
    zIndex: 1,
})

export const MessageContainer = styled(Box)({
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    flexDirection: "row",
    margin: "10px 0",
});

export const MessageBubble = styled('div')({
    flex: 10,
    padding: "10px 20px",
    borderRadius: "20px",
    background: "linear-gradient(145deg, #1c2a48, #283759)",
    boxShadow:  "5px 5px 10px #1c2a48, -5px -5px 10px #3a4a6a",
    maxWidth: "100%",
    maxHeight: "10%",
    whiteSpace: "pre-line",
    color: "white",
    fontFamily: "Nanum Pen Script",
    fontSize: "30px",
    textAlign: "left",
})
