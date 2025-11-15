import React from "react";
import { styled } from '@mui/system'; 

export const BackNumber = styled('div')({
    position: "absolute",
    left: "4.76%",
    right: "28.57%",
    top: "18.42%",
    bottom: "51.38%",
    fontFamily: "Anton",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "400px",
    lineHeight: "122.9%",
    letterSpacing: "0.05em",
    color: "#FFFFFF"
});

export default function BackNumberComponent({ backNumber }) {
    return <BackNumber>{backNumber}</BackNumber>;
}