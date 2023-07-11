import { useContext } from "react";
import { DataContext } from "../Contexts/MainContext";
import GridRender from "../Components/GridRender";
import TrendsRender from "../Components/TrendsRender";

export default function Home() {
  const { forYou } = useContext(DataContext);
  return (
    <>
      <TrendsRender />
      <GridRender title="Recommended for you" array={forYou} />
    </>
  );
}
