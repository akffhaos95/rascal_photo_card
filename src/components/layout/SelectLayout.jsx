import React, { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import {
  Button,
  Card,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import PlayerToggle from "../modules/PlayerToggle";

const SelectLayout = ({ setPlayer, setData, setImage }) => {
  const [playerData, setPlayerData] = useState(null);
  const [batterData, setBatterData] = useState(null);
  const [pitcherData, setPitcherData] = useState(null);

  const [selectedName, setSelectedName] = useState("");
  const [selectedBatterRow, setSelectedBatterRow] = useState(null);
  const [selectedPitcherRow, setSelectedPitcherRow] = useState(null);

  useEffect(() => {
    const loadExcel = async () => {
      try {
        const response = await fetch("/rascal.xlsx");
        const arrayBuffer = await response.arrayBuffer();
        const workbook = XLSX.read(arrayBuffer, { type: "array" });

        const pitcherSheet = workbook.Sheets["Score-Pitcher"];
        const batterSheet = workbook.Sheets["Score-Batter"];
        const playerSheet = workbook.Sheets["Player"];

        const option = { range: 1 };

        setPitcherData(XLSX.utils.sheet_to_json(pitcherSheet, option));
        setBatterData(XLSX.utils.sheet_to_json(batterSheet, option));
        setPlayerData(XLSX.utils.sheet_to_json(playerSheet, option));
      } catch (err) {
        console.error("엑셀 로드 오류:", err);
      }
    };

    loadExcel();
  }, []);

  const handlePlayerSelect = (name) => {
    setSelectedName(name);

    const playerRow = playerData.find((row) => row["이름"] === name);
    const batterRow = batterData.find((row) => row["이름"] === name) || null;
    const pitcherRow = pitcherData.find((row) => row["이름"] === name) || null;

    setSelectedBatterRow(batterRow);
    setSelectedPitcherRow(pitcherRow);

    setPlayer(playerRow);
    setData(batterRow || pitcherRow);

    const defaultImage = `/${name}.png`;
    setImage(defaultImage);

    console.log(playerRow);
  };

  const handleToggleChange = (type) => {
    if (type === "batter") setData(selectedBatterRow);
    if (type === "pitcher") setData(selectedPitcherRow);
  };

  if (!playerData) return <>Loading...</>;

  return (
    <>
      <Card>
        <Stack direction="row" spacing={1} flexWrap="wrap">
          {playerData.map((row, idx) => {
            const name = row["이름"];
            return (
              <Button
                key={`${name}-${idx}`}
                variant="contained"
                size="small"
                onClick={() => handlePlayerSelect(name)}
              >
                {name}
              </Button>
            );
          })}
        </Stack>
      </Card>

      {/* 선택된 선수가 있을 때만 토글 표시 */}
      {selectedName && (
        <Card sx={{ mt: 2, p: 1 }}>
          <PlayerToggle
            batterRow={selectedBatterRow}
            pitcherRow={selectedPitcherRow}
            onChange={handleToggleChange}
          />
        </Card>
      )}
    </>
  );
};

export default SelectLayout;
