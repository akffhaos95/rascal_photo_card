// PlayerInfoBox.js

import { Box, Typography } from "@mui/material";

import React from "react";
import { styled } from "@mui/system";

const InfoBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center; /* 가로 중앙 정렬 */
  justify-content: center; /* 세로 중앙 정렬 */

  background-color: #141e3030; /* 투명한 배경 */
  padding: 20px;
  margin: 80px 30px 0px 30px;
  border-radius: 8px;
  height: 400px;
  z-index: 10;

  border: 5px solid rgba(0, 255, 255, 0.8); /* 네온 테두리 */
  box-shadow: 0 0 5px rgba(0, 255, 255, 0.4), 0 0 10px rgba(0, 255, 255, 0.4);
`;

const ProfileHeader = styled(Box)`
  display: flex;
  width: 100%;
`;

const ProfileList = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: left;
  margin-top: 20px;
  width: 100%;
`;

const Profile = ({ player, data }) => {
  const en_name = player["영어 이름"];
  const profile = player["프로필"].split("\n");

  const formatProfileLine = (line) => {
    const isHighlighted = line.trim().startsWith("[");

    return (
      <Typography
        variant="body2"
        sx={{
          color: isHighlighted ? "red" : "white",
          fontFamily: "Jalnan",
          fontSize: "60px",
        }}
        key={isHighlighted ? line.substring(1) : line}
      >
        {isHighlighted ? line.substring(1) : line}
      </Typography>
    );
  };

  return (
    <InfoBox>
      {/* <ProfileHeader>
        <Typography
          variant="h4" // 헤더 글자 크기 증가
          sx={{ fontWeight: "bold", fontSize: "50px" }} // 헤더 글자 크기 (2rem)
        >
          {player["영어 이름"]}
        </Typography>
        <Typography
          variant="h4" // 헤더 글자 크기 증가
          sx={{ fontWeight: "bold", fontSize: "50px" }} // 헤더 글자 크기 (2rem)
        >
          {player["등번호"]}
        </Typography>
      </ProfileHeader> */}
      {/* <ProfileHeader>
        <Typography
          variant="h5" // 서브 헤더 글자 크기 증가
          color="textSecondary"
          sx={{ fontSize: "40px" }} // 서브 헤더 글자 크기 (1.8rem)
        >
          {en_name}
        </Typography>
        <Typography
          variant="h5" // 서브 헤더 글자 크기 증가
          color="textSecondary"
          sx={{ fontSize: "40px" }} // 서브 헤더 글자 크기 (1.8rem)
        >
          Position: {player["포지션"]}
        </Typography>
      </ProfileHeader> */}
      <ProfileList>
        {profile.map((line) => formatProfileLine(line))}
      </ProfileList>
    </InfoBox>
  );
};

export default Profile;
