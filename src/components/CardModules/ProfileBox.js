// PlayerInfoBox.js

import { Box, Typography } from "@mui/material";

import React from "react";
import { styled } from "@mui/system";

const InfoBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-color: rgba(0, 255, 255, 0.8);
  padding: 10px;
  border-radius: 8px;
  position: absolute;
  z-index: 10;
`;

const Profile = ({ player, data }) => {
  const en_name = player["영어 이름"];

  return (
    <InfoBox>
      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
        {player["이름"]} ({en_name})
      </Typography>
      <Typography variant="body1" color="textSecondary">
        No: {player["등번호"]}
      </Typography>
      <Typography variant="body1" color="textSecondary">
        Position: {player["포지션"]}
      </Typography>
      <Typography variant="body2" sx={{ marginTop: 1 }} color="primary">
        Main Stats:
      </Typography>
      <Typography variant="body2" color="textSecondary">
        {player["포지션"] === "P"
          ? `WHIP: ${data["WHIP"]}`
          : `V.C: ${data["V.C"]}`}
      </Typography>
    </InfoBox>
  );
};

export default Profile;
