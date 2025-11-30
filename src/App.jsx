import { useEffect, useState } from "react";
import CardSection from "./components/Card/CardSection";
import * as XLSX from "xlsx";
import SelectLayout from "./components/layout/SelectLayout";
import html2canvas from "html2canvas";
import { Button } from "@mui/material";

export default function App() {
  const [player, setPlayer] = useState(null);
  const [data, setData] = useState(null);
  const [image, setImage] = useState(null);

  const captureCard = async () => {
    try {
      const frontElement = document.querySelector("#front");
      const backElement = document.querySelector("#back");

      const frontCanvas = await html2canvas(frontElement);
      const backCanvas = await html2canvas(backElement);

      const frontImgData = frontCanvas.toDataURL("image/png");
      const backImgData = backCanvas.toDataURL("image/png");

      const frontLink = document.createElement("a");
      const backLink = document.createElement("a");

      frontLink.href = frontImgData;
      backLink.href = backImgData;

      frontLink.href = frontImgData;
      backLink.href = backImgData;

      frontLink.download = `${player["이름"]}_front.png`;
      backLink.download = `${player["이름"]}_back.png`;

      frontLink.click();
      backLink.click();
    } catch (error) {
      console.error("Error capturing card:", error);
    }
  };

  return (
    <>
      <SelectLayout
        setPlayer={setPlayer}
        setData={setData}
        setImage={setImage}
      />
      <Button onClick={captureCard}>Capture Card</Button>
      <CardSection player={player} data={data} image={image} />
    </>
  );
}
