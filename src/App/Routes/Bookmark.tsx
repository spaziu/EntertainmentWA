import { DataContext, DataContextType } from "../Contexts/MainContext";
import { useContext } from "react";
import SearchRender from "../Components/SearchRender";
import MapCardXS from "../Components/MapCardXS";

export default function Movies() {
  const { moviesBookmarked, seriesBookmarked } = useContext(
    DataContext
  ) as DataContextType;
  const bookmarkSearch = moviesBookmarked.concat(seriesBookmarked);
  return (
    <>
      <SearchRender title="Bookmarked Shows" data={bookmarkSearch}>
        <MapCardXS title="Bookmarked Movies" data={moviesBookmarked} />
        <MapCardXS title="Bookmarked TV Series" data={seriesBookmarked} />
      </SearchRender>
    </>
  );
}
