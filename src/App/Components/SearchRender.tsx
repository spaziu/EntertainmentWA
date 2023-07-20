import { RiSearchLine } from "react-icons/ri";
import { useState, ChangeEvent } from "react";
import MapCardXS from "./MapCardXS";
import { Obj } from "../Contexts/MainContext";

interface Props {
  data: Obj[];
  title: string;
  children: React.ReactNode;
}

export default function SearchBar({ data, title, children }: Props) {
  const [search, setSearch] = useState("");
  const searching = (event: ChangeEvent<HTMLInputElement>) =>
    setSearch(event.target.value);
  const seachResult = data.filter((e) =>
    e.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="mb-3 mt-1 flex items-center">
        <RiSearchLine className="mr-3 inline text-2xl xl:text-3xl" />
        <input
          type="text"
          className="w-5/6 bg-emerald-500/0 text-xl placeholder-blue-300/75 outline-0 transition focus:underline focus:underline-offset-4"
          placeholder={"Search for " + title}
          onChange={searching}
        />
      </div>
      <div className="flex flex-col justify-center py-3 text-white md:mt-4">
        {seachResult.length === 0 && search.length === 0 ? (
          <div>Nothing to display</div>
        ) : seachResult.length === 0 ? (
          <div>No result for {search}</div>
        ) : search.length === 0 ? (
          <>{children}</>
        ) : (
          <MapCardXS data={seachResult} title={title} />
        )}
      </div>
    </>
  );
}
