import {
  RiBookmarkFill,
  RiBookmarkLine,
  RiFilmFill,
  RiTvLine,
} from "react-icons/ri";
import { useContext } from "react";
import { DataContext, DataContextType, Obj } from "../Contexts/MainContext";

export default function CardXS(props: Obj) {
  const { toggleBookmark } = useContext(DataContext) as DataContextType;

  return (
    <div className="flex flex-col">
      <div
        className="relative z-0 my-2 h-[22vh] w-full rounded-2xl bg-cover bg-center p-2 font-semibold shadow-xl xl:h-[26vh]"
        style={{ backgroundImage: `url(${props.cover})` }}
      >
        <div
          className="absolute right-4 top-4 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-gray-500/50 transition hover:scale-125 active:scale-150"
          onClick={() => toggleBookmark(props.id)}
        >
          {props.bookmarked ? (
            <RiBookmarkFill className=" inline text-lg " />
          ) : (
            <RiBookmarkLine className=" inline text-lg" />
          )}
        </div>
      </div>
      <div className="mb-3">
        <span className="text-gray-300">
          {props.date} ·{" "}
          <span className=" mr-1 ">
            {props.type === "Movie" ? (
              <RiFilmFill className=" inline" />
            ) : (
              <RiTvLine className=" inline" />
            )}
          </span>
          {props.type} · {props.classification}
        </span>
        <h1 className="text-xl font-bold"> {props.title}</h1>
      </div>
    </div>
  );
}
