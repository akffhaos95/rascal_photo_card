import { useEffect, useState } from "react";
import CardSection from "./components/Card/CardSection";
import * as XLSX from "xlsx";
import SelectLayout from "./components/layout/SelectLayout";

export default function App() {
  const [player, setPlayer] = useState(null);
  const [data, setData] = useState(null);
  const [image, setImage] = useState(null);

  return (
    <>
      <SelectLayout
        setPlayer={setPlayer}
        setData={setData}
        setImage={setImage}
      />
      <CardSection player={player} data={data} image={image} />
    </>
  );
}
