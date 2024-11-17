import React from "react";
import { styled } from "@mui/system";

const Number = ({ number }) => {
  if (number === null) return null;

  const NumberBox = styled("div")({
    position: "absolute",
    top: "20px",
    left: "20px",
    width: "300px",
    height: "300px",
    color: "white",
    fontSize: `180px`,
    fontFamily: "Facon",
    fontWeight: 700,
    borderRadius: "5px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
  });

  return (
    <NumberBox>
      <div>{number}</div>
    </NumberBox>
  );
};

export default Number;
