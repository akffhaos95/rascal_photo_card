import React from "react";
import { Box, Typography } from "@mui/material";
import { hexToRgba } from "../util/color";

const StatBarItem = ({ label, color, value, subValue }) => {
  // value는 이 bar의 "영역 비율 (%)"
  const HIDE_LABEL_THRESHOLD = 1; // ✅ 기준 퍼센트

  const showLabel = value >= HIDE_LABEL_THRESHOLD;

  let fillPercent = 100;

  if (subValue !== undefined) {
    if (value <= 0 || subValue <= 0) {
      fillPercent = 0;
    } else {
      fillPercent = (subValue / value) * 100;
    }
  }
  const bgColor = hexToRgba(color, 0.25);
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
      }}
    >
      {/* Label + Dot */}
      {showLabel && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 6,
            marginBottom: 10,
          }}
        >
          <Typography
            fontSize={40}
            fontWeight={700}
            color="#fff"
            letterSpacing={0.3}
          >
            {label}
          </Typography>

          <Box
            sx={{
              width: 14,
              height: 14,
              borderRadius: "50%",
              backgroundColor: color,
            }}
          />
        </Box>
      )}

      {/* Bar */}
      <Box
        sx={{
          width: "100%",
          height: 30,
          borderRadius: 999,
          backgroundColor: bgColor,
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            width: `${fillPercent}%`,
            height: "100%",
            borderRadius: 999,
            background: color,
          }}
        />
      </Box>
    </Box>
  );
};

export default StatBarItem;
