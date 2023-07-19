import MapCardXS from "../Components/MapCardXS";
import SearchRender from "../Components/SearchRender";
import { DataContext, DataContextType } from "../Contexts/MainContext";
import { useContext } from "react";

export default function Series() {
  const { series } = useContext(DataContext) as DataContextType;

  return (
    <SearchRender data={series} title="TV Series">
      <MapCardXS data={series} title="TV Series" />;
    </SearchRender>
  );
}
