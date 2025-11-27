import React from "react";
import { Box, LinearProgress, Typography } from "@mui/material";
import { styled } from "@mui/system";
import Glass from "../modules/Glass";
import { useTheme } from "@mui/material/styles";
import { getVisualColor } from "../util/getVisualColor";

const Wrapper = styled(Box)({
  width: "95%", // Glass(950px)에 맞춤
  padding: "20px 40px",
  display: "flex",
  flexDirection: "column",
  gap: 20,
});

const KeyMetricBar = ({ metric }) => {
  if (metric === undefined) return null;

  const label = metric.label;
  const value = metric.value;

  const theme = useTheme();
  const { bar, glow } = getVisualColor(value, theme);

  return (
    <Glass>
      <Wrapper>
        <Typography
          fontSize={50}
          fontWeight={800}
          color="#ffffff"
          letterSpacing={0.5}
        >
          {label}
        </Typography>

        <LinearProgress
          variant="determinate"
          value={value}
          sx={{
            height: 40,
            borderRadius: 999,
            overflow: "hidden",
            backgroundColor: "rgba(255,255,255,0.12)",
            "& .MuiLinearProgress-bar": {
              borderRadius: 999,
              backgroundImage: bar,
              boxShadow: glow,
            },
          }}
        />
      </Wrapper>
    </Glass>
  );
};

export default KeyMetricBar;
