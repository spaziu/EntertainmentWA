import { DataContext } from "../Contexts/MainContext";
import { useContext } from "react";
import GridRender from "../Components/GridRender";

export default function Movies() {
  const { movies } = useContext(DataContext);

  return <GridRender title="Movies" array={movies} />;
}
