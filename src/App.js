import "./App.css";
import "./style/font.css";

import * as XLSX from "xlsx";

import React, { useEffect, useState } from "react";

import { Button } from "@mui/material";
import CardSection from "./components/CardModules/CardSection";
import Footer from "./components/Footer";
import Hedaer from "./components/Header";
import PlayerSection from "./components/PlayerSection";
import html2canvas from "html2canvas";

const App = () => {
  const [playerList, setPlayerList] = useState(null);
  const [batterList, setBatterList] = useState(null);
  const [pitcherList, setPitcherList] = useState(null);

  const [player, setPlayer] = useState(null);

  const captureCard = async () => {
    try {
      const frontElement = document.querySelector("#front");
      const backElement = document.querySelector("#back");

      const frontCanvas = await html2canvas(frontElement);
      const backCanvas = await html2canvas(backElement);

      const frontImgData = frontCanvas.toDataURL("image/png");
      const backImgData = backCanvas.toDataURL("image/png");

      const frontLink = document.createElement("a");
      const backLink = document.createElement("a");

      frontLink.href = frontImgData;
      backLink.href = backImgData;

      frontLink.href = frontImgData;
      backLink.href = backImgData;

      frontLink.download = `${player["이름"]}_front.png`;
      backLink.download = `${player["이름"]}_back.png`;

      frontLink.click();
      backLink.click();
    } catch (error) {
      console.error("Error capturing card:", error);
    }
  };

  useEffect(() => {
    const fetchExcelData = async () => {
      try {
        const url =
          "https://docs.google.com/spreadsheets/d/1CHYuCNbfoykx4aw7IFcUwsDuhLPV3Bh5/edit#gid=258449596";

        fetch(url)
          .then((res) => res.arrayBuffer())
          .then((arrayBuffer) => new Uint8Array(arrayBuffer))
          .then((ab) => {
            const workbook = XLSX.read(ab, { type: "array" });

            workbook.SheetNames.reduce((sheets, name) => {
              const sheet = workbook.Sheets[name];
              sheets[name] = XLSX.utils.sheet_to_json(sheet);
              return sheets;
            }, {});
            const playerWorkSheet = workbook.Sheets["선수"];
            const playerData = XLSX.utils.sheet_to_json(playerWorkSheet);
          });

        const filePath = `${process.env.PUBLIC_URL}/rascal_data.xlsx`;
        const response = await fetch(filePath);
        if (response.ok) {
          const arrayBuffer = await response.arrayBuffer();
          const data = new Uint8Array(arrayBuffer);
          const workbook = XLSX.read(data, { type: "array" });

          const playerWorkSheet = workbook.Sheets["선수"];
          const playerData = XLSX.utils.sheet_to_json(playerWorkSheet);
          setPlayerList(playerData);

          const batterWorkSheet = workbook.Sheets["타자"];
          const batterData = XLSX.utils.sheet_to_json(batterWorkSheet);
          setBatterList(batterData);

          const pitcherWorkSheet = workbook.Sheets["투수"];
          const pitcherData = XLSX.utils.sheet_to_json(pitcherWorkSheet);
          setPitcherList(pitcherData);

          // 초반은 첫번째 player를 저장
          setPlayer(playerData[0]);
        } else {
          console.error("Failed to fetch the Excel file.");
        }
      } catch (error) {
        console.error("Error reading Excel file:", error);
      }
    };
    fetchExcelData();
  }, []);
  return (
    <div className="App">
      <Hedaer />
      <Button onClick={captureCard}>Capture Card Front</Button>
      {playerList != null ? (
        <>
          <PlayerSection playerList={playerList} setPlayer={setPlayer} />
          <CardSection
            player={player}
            batter={batterList}
            pitcher={pitcherList}
          />
        </>
      ) : (
        <></>
      )}
      <Footer />
    </div>
  );
};

export default App;
