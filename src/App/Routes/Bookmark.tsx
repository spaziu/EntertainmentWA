import { DataContext } from "../Contexts/MainContext";
import { useContext } from "react";
import GridRender from "../Components/GridRender";

export default function Movies() {
  const { moviesBookmarked, seriesBookmarked } = useContext(DataContext);

  return (
    <>
      <GridRender title="My Movies Bookmarked" array={moviesBookmarked} />
      <GridRender title="My Series Bookmarked" array={seriesBookmarked} />
    </>
  );
}
