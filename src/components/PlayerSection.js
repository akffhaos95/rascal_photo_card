import React from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

// 선수 리스트 버튼 -> json 선수 개수만큼
// 각 버튼 클릭 -> 선수 데이터로 useState 변경

const PlayerSection = ({ playerList, setPlayer }) => {
    
  const changePlayer = ({ player }) => {
    setPlayer(player);
  };

  return (
    <Grid container spacing={2} margin="30px">      
      {playerList.map((player) => (
        <Button onClick={() => changePlayer({player})}>{ player['이름'] }</Button> 
      ))}
    </Grid>
  );
};

export default PlayerSection;