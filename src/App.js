import React, { useEffect, useState } from 'react';
import './App.css';
import Hedaer from './components/Header';
import CardSection from './components/CardModules/CardSection';
import PlayerSection from './components/PlayerSection';
import Footer from './components/Footer';
import * as XLSX from 'xlsx';

const App = () => {
  const [playerList, setPlayerList] = useState(null);
  const [batterList, setBatterList] = useState(null);
  const [pitcherList, setPitcherList] = useState(null);

  const [player, setPlayer] = useState(null);

  useEffect(() => {
    const fetchExcelData = async () => {
      try {
        const url = "https://docs.google.com/spreadsheets/d/1CHYuCNbfoykx4aw7IFcUwsDuhLPV3Bh5/edit#gid=258449596"

        fetch(url)
        .then(res => res.arrayBuffer())
        .then(arrayBuffer => new Uint8Array(arrayBuffer))
        .then(ab => {
          const workbook = XLSX.read(ab, { type: 'array' });

          workbook.SheetNames.reduce((sheets, name) => {
            const sheet = workbook.Sheets[name];
            sheets[name] = XLSX.utils.sheet_to_json(sheet);
            return sheets;
          }, {})
          const playerWorkSheet = workbook.Sheets['선수'];
          const playerData = XLSX.utils.sheet_to_json(playerWorkSheet);
        })

        const filePath = `${process.env.PUBLIC_URL}/rascal_data.xlsx`;
        const response = await fetch(filePath);
        if (response.ok) {
          const arrayBuffer = await response.arrayBuffer();
          const data = new Uint8Array(arrayBuffer);
          const workbook = XLSX.read(data, { type: 'array' });
          
          const playerWorkSheet = workbook.Sheets['선수'];
          const playerData = XLSX.utils.sheet_to_json(playerWorkSheet);
          setPlayerList(playerData);

          const batterWorkSheet = workbook.Sheets['타자'];
          const batterData = XLSX.utils.sheet_to_json(batterWorkSheet);
          setBatterList(batterData);
          
          const pitcherWorkSheet = workbook.Sheets['투수'];
          const pitcherData = XLSX.utils.sheet_to_json(pitcherWorkSheet);
          setPitcherList(pitcherData);

          // 초반은 첫번째 player를 저장
          setPlayer(playerData[0])
        } else {
          console.error('Failed to fetch the Excel file.');
        }
      } catch (error) {
        console.error('Error reading Excel file:', error);
      }
    };
    fetchExcelData();
  }, []);
  return (
    <div className="App">
      <Hedaer />
      {playerList != null ? (
        <>
          <PlayerSection playerList = { playerList } setPlayer={ setPlayer } />
          <CardSection player={ player } batter={ batterList } pitcher={ pitcherList }/>
        </>
      ) : 
        <></>
      }      
      <Footer />
    </div>
  );
}

export default App;