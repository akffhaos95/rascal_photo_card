import React from "react";
import { styled } from "@mui/system";

export const FirstName = styled("div")({
  position: "absolute",
  left: "-11.9%",
  right: "-11.9%",
  top: "9.21%",

  fontFamily: "'Anton', sans-serif",
  fontWeight: 400,
  fontSize: "250px",
  lineHeight: "1.1",
  textAlign: "center",
  letterSpacing: "-0.015em",

  /* ✅ 실제 컬러 */
  color: "#3f7fe6",

  /* ✅ 네온 + 깊이 */
  textShadow: `
    0 3px 0 rgba(0,0,0,0.25),
    0 0 40px rgba(73,139,227,0.25),
    0 0 120px rgba(19,235,214,0.15)
  `,

  userSelect: "none",
});

export default function FirstNameComponent({ firstName }) {
  return <FirstName>{firstName}</FirstName>;
}
