import { useContext } from "react";
import { DataContext, DataContextType } from "../Contexts/MainContext";
import MapTrends from "../Components/MapTrends";
import MapCardXS from "../Components/MapCardXS";
import SearchRender from "../Components/SearchRender";

export default function Home() {
  const { forYou, data } = useContext(DataContext) as DataContextType;

  return (
    <SearchRender data={data} title="Movies & TV Series">
      <MapTrends />
      <MapCardXS title="Recommended for you" data={forYou} />
    </SearchRender>
  );
}
