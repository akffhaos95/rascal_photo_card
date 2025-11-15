import React from "react";
import { styled } from '@mui/system'; 

export const FirstName = styled('div')({
    position: "absolute",
    left: "-11.9%",
    right: "-11.9%",
    top: "9.21%",
    bottom: "71.95%",
    fontFamily: "'Anton', sans-serif",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "250px",
    lineHeight: "122.9%",
    textAlign: "center",
    letterSpacing: "-0.015em",
    background: "linear-gradient(231.5deg, #498BE3 33.09%, #196BED 77.19%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    textFillColor: "transparent",
    textShadow: "0px -16.7874px 377.717px #377CA3, 0px 150.435px 1805.22px #13EBD6",
});

export default function FirstNameComponent({ firstName }) {
    return <FirstName>{firstName}</FirstName>;
}