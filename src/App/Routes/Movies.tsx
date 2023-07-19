import SearchBar from "../Components/SearchRender";
import MapCardXS from "../Components/MapCardXS";
import { DataContext, DataContextType } from "../Contexts/MainContext";
import { useContext } from "react";

export default function Movies() {
  const { movies } = useContext(DataContext) as DataContextType;

  return (
    <SearchBar data={movies} title="Movies">
      <MapCardXS data={movies} title="Movies" />;
    </SearchBar>
  );
}
