import React from "react";
import { Box, Typography } from "@mui/material";
import Glass from "../modules/Glass";

const HandIcon = ({ label, active }) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 0.5,
      opacity: active ? 1 : 0.35,
    }}
  >
    <Box
      sx={{
        width: 36,
        height: 36,
        borderRadius: "50%",
        background: "rgba(255,255,255,0.15)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 20,
      }}
    >
      ⚾
    </Box>
    <Typography fontSize={14} fontWeight={700} color="#fff">
      {label}
    </Typography>
  </Box>
);

const ProfileLayout = ({ player }) => {
  if (!player) return null;

  return (
    <Glass>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          gap: 4,
          padding: "32px 36px",
          boxSizing: "border-box",
        }}
      >
        {/* ✅ Left : Photo */}
        <Box
          sx={{
            width: 200,
            height: 250,
            borderRadius: 4,
            backgroundImage: `url(/${player.name}.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            flexShrink: 0,
            boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
          }}
        />

        {/* ✅ Right : Info */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
        >
          {/* Name */}
          <Box sx={{ display: "flex", alignItems: "baseline", gap: 2 }}>
            <Typography fontSize={48} fontWeight={900} color="#fff">
              {player.name} /
            </Typography>
            <Typography fontSize={48} fontWeight={900} color="#fff">
              {"KIM MIN SEOK"}
            </Typography>
            <Typography fontSize={35} fontWeight={500} color="#fff">
              #{player.number}
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "baseline", gap: 2 }}>
            <Typography fontSize={40} fontWeight={700} color="#fff">
              1992-12-16
            </Typography>
          </Box>

          {/* Meta */}
          <Typography
            fontSize={20}
            fontWeight={600}
            color="rgba(255,255,255,0.75)"
          >
            {player.birth} ｜ {player.position}
          </Typography>

          {/* Hands */}
          <Box sx={{ display: "flex", gap: 3 }}>
            <HandIcon label="L" active={player.throw === "L"} />
            <HandIcon label="R" active={player.throw === "R"} />
            <HandIcon label="Bat L" active={player.hit === "L"} />
            <HandIcon label="Bat R" active={player.hit === "R"} />
          </Box>
        </Box>
      </Box>
    </Glass>
  );
};

export default ProfileLayout;
