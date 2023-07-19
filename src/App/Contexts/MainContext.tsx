import { createContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";

export const DataContext = createContext({
  // trends: [{}],
  // forYou: [{}],
  // data: [{}],
  // movies: [{}],
  // series: [{}],
  // seriesBookmarked: [{}],
  // moviesBookmarked: [{}],
  // toggleBookmark: () => {
  //   return [{}];
  // },
});

export interface Obj {
  title: string;
  date: number;
  type: string;
  classification: string;
  trending: boolean;
  cover: string;
  id: string;
  bookmarked: boolean;
}
export interface DataContextType {
  trends: Obj[];
  forYou: Obj[];
  data: Obj[];
  movies: Obj[];
  series: Obj[];
  seriesBookmarked: Obj[];
  moviesBookmarked: Obj[];
  toggleBookmark: (id: string) => void;
}

export async function Loader() {
  const storedData = localStorage.getItem("db");
  if (storedData) {
    return JSON.parse(storedData);
  } else {
    const res = await fetch("http://localhost:3000/db");
    const data = await res.json();
    const bookmarked = await data.db.map((e: Obj[]) => {
      return { ...e, bookmarked: false };
    });
    return bookmarked;
  }
}

export default function MainContext() {
  const loaderData = useLoaderData() as Obj[];
  const [data, setData] = useState(loaderData);

  useEffect(() => {
    localStorage.setItem("db", JSON.stringify(data));
  }, [data]);

  function toggleBookmark(id: string) {
    setData((prev) => {
      return prev.map((e) =>
        e.id === id ? { ...e, bookmarked: !e.bookmarked } : { ...e }
      );
    });
  }
  const trends = data.filter((e) => e.trending);
  const forYou = data.filter((e) => e.trending === false);
  const movies = data.filter((e) => e.type === "Movie");
  const series = data.filter((e) => e.type === "TV Series");
  const seriesBookmarked = series.filter((e) => e.bookmarked);
  const moviesBookmarked = movies.filter((e) => e.bookmarked);

  return (
    <DataContext.Provider
      value={{
        trends,
        forYou,
        data,
        movies,
        series,
        seriesBookmarked,
        moviesBookmarked,
        toggleBookmark,
      }}
    >
      <MainLayout />
    </DataContext.Provider>
  );
}
