import React from 'react';
import { Box0, Box1, Box2, Rascal, Name } from './common';

const PlayerBox = ({ name }) => {

    return (
        <Box0>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Chakra+Petch&display=swap"/>
            <Box1>
            <Rascal>RASCAL</Rascal>
            </Box1>
            <Box2>
                <Name>{ name }</Name>
            </Box2>
        </Box0>            
      );
};

export default PlayerBox; 