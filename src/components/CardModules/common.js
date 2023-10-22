import { Box } from '@mui/material';
import { styled } from '@mui/system'; 

// PlayerBox.js

export const Box0 = styled(Box)({
    transform: 'rotate(-25deg)',
    position: 'absolute', 
    top: 330,
    left: -50,
})

export const Box1 = styled(Box)({
    width: '600px',
    height: '100px',
    backgroundColor: 'transparent', 
    position: 'relative' 
})

export const Box2 = styled(Box)({
    width: '600px', 
    height: '300px', 
    background: '#141E30', //'linear-gradient(0deg, #ffffff, #141E30)',
    position: 'relative'
})

export const Rascal = styled('div')({
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

export const Name = styled('div')({
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
    color: 'white'
})

export const BackText2 = styled('div')({
    transform: 'rotate(90deg)',
    fontFamily: 'Monoton',
    fontSize: '100px',
    position: 'relative',
    bottom: '60px',
    left: '100px',
    color: 'white'
})