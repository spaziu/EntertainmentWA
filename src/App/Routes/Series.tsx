import GridRender from "../Components/GridRender";
import { DataContext } from "../Contexts/MainContext";
import { useContext } from "react";

export default function Series() {
  const { series } = useContext(DataContext);

  return <GridRender title="TV Series" array={series} />;
}
