import { Box } from '@mui/material';
import { styled } from '@mui/system'; 

// SignBox
export const SignBox = ({ sign }) => {
    return (
        <SignBox0>
            <SignBox1>
            </SignBox1>
            <SignBox2>
                <Sign>{ sign }</Sign>
            </SignBox2>
        </SignBox0>            
      );
  };
  

const SignBox0 = styled(Box)({
    // transform: 'rotate(-25deg)',
    position: 'absolute', 
    top: 100,
    left: -50,
})

const SignBox1 = styled(Box)({
    width: '300px',
    height: '100px',
    backgroundColor: 'transparent', 
    position: 'relative' 
})

const SignBox2 = styled(Box)({
    width: '300px', 
    height: '100px', 
    background: '#141E30', //'linear-gradient(0deg, #ffffff, #141E30)',
    position: 'relative'
})

const Sign = styled('div')({
    fontFamily: 'Chakra Petch, Chakra Petch',
    fontSize: '10px',
    position: 'absolute', 
    top: 0, 
    left: 100, 
    textAlign: 'left', 
    color: 'white',
    fontStyle: 'italic',
    fontWeight: 'bold'
});

// PlayerBox
export const PlayerBox = ({ name }) => {
    return (
        <PlayerBox0>
            <PlayerBox1>
            <Rascal>RASCAL</Rascal>
            </PlayerBox1>
            <PlayerBox2>
                <Name>{ name }</Name>
            </PlayerBox2>
        </PlayerBox0>            
    );
};

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
    zIndex: 0,
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
    top: '250px',
    right: '100px',
    color: '#A9A9A9'
})

export const BackText2 = styled('div')({
    transform: 'rotate(90deg)',
    fontFamily: 'Monoton',
    fontSize: '100px',
    position: 'relative',
    bottom: '60px',
    left: '100px',
    color: '#A9A9A9'
})

export const MessageContainer = styled(Box)({
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    flexDirection: "row",
    margin: "10px 0"
});

export const SenderIcon = styled('div')({
    flex: 1,
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    marginLeft: "10px",
    backgroundColor: "#ddd", /* 임시 배경색. 실제로는 이미지를 사용하면 됩니다. */
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    fontSize: "25px"
})

export const MessageBubble = styled('div')({
    flex: 10,
    padding: "10px 20px",
    borderRadius: "20px",
    background: "linear-gradient(145deg, #1c2a48, #283759)",
    boxShadow:  "5px 5px 10px #1c2a48, -5px -5px 10px #3a4a6a",
    maxWidth: "70%",
    whiteSpace: "pre-line",
    color: "white",
    fontSize: "15px",
})