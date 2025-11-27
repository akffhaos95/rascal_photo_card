import { ToggleButtonGroup, ToggleButton } from "@mui/material";
import { useState, useEffect } from "react";

const PlayerToggle = ({ batterRow, pitcherRow, onChange }) => {
  const [type, setType] = useState("batter"); // 기본 batter

  // 선택된 선수 변경 또는 데이터 변경 시 초기값 재설정
  useEffect(() => {
    if (batterRow) {
      setType("batter"); // 타자 있으면 기본 batter
      onChange("batter");
    } else if (pitcherRow) {
      setType("pitcher"); // 타자 없고 투수만 있으면 pitcher
      onChange("pitcher");
    } else {
      setType(""); // 데이터가 둘 다 없는 경우
      onChange(null);
    }
  }, [batterRow, pitcherRow]);

  const handleChange = (event, newType) => {
    if (!newType) return;
    setType(newType);
    onChange(newType);
  };

  return (
    <ToggleButtonGroup
      size="small"
      value={type}
      onChange={handleChange}
      exclusive
    >
      <ToggleButton
        value="batter"
        disabled={!batterRow} // batterRow 없으면 비활성화
      >
        Batter
      </ToggleButton>

      <ToggleButton
        value="pitcher"
        disabled={!pitcherRow} // pitcherRow 없으면 비활성화
      >
        Pitcher
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default PlayerToggle;
