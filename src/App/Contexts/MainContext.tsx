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

interface Obj {
  title: string;
  date: number;
  type: string;
  classification: string;
  trending: boolean;
  cover: string;
  id: string;
  bookmarked: boolean;
}

export async function Loader() {
  if (localStorage.getItem("db")) {
    return JSON.parse(localStorage.getItem("db"));
  } else {
    try {
      const res = await fetch("http://localhost:3000/db");
      const data = await res.json();
      const bookmarked = await data.db.map((e: Obj[]) => {
        return { ...e, bookmarked: false };
      });
      return bookmarked;
    } catch (error) {
      throw console.log(error);
    }
  }
}

export default function MainContext() {
  const loaderData = useLoaderData();
  const [data, setData] = useState<Obj[]>(loaderData);

  useEffect(() => {
    localStorage.setItem("db", JSON.stringify(data));
  }, [data]);

  function toggleBookmark(id: string) {
    setData((prev: Obj[]) => {
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
