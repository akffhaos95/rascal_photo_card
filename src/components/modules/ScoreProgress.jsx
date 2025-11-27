import * as React from "react";
import PropTypes from "prop-types";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";

import { green, blue, orange, yellow, red } from "@mui/material/colors";

// 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' | 'inherit

const getColorByScore = (score) => {
  if (score >= 80) return "success";
  if (score >= 60) return "info";
  if (score >= 40) return "warning";
  if (score >= 20) return "secondary";
  return "error";
};

export default function ScoreProgress(props) {
  const theme = useTheme();

  const scoreColor = getColorByScore(props.value);
  const colorValue =
    theme.palette[scoreColor]?.main || theme.palette.error.main;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
        width: "180px",
      }}
    >
      <Box sx={{ position: "relative", display: "inline-flex" }}>
        <CircularProgress
          enableTrackSlot
          variant="determinate"
          value={props.value}
          size={160}
          color={scoreColor}
          sx={{
            "& .MuiCircularProgress-circle": {},
          }}
        />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h2"
            component="div"
            sx={{
              color: colorValue,
              fontWeight: 700,
            }}
          >
            {`${Math.round(props.value)}`}
          </Typography>
        </Box>
      </Box>
      <Typography
        fontSize={35}
        fontWeight={800}
        color="#ffffff"
        letterSpacing={0.5}
      >
        {props.label}
      </Typography>
    </Box>
  );
}
