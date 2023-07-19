import {
  RiBookmarkFill,
  RiBookmarkLine,
  RiFilmFill,
  RiTvLine,
} from "react-icons/ri";
import { useContext } from "react";
import { DataContext, Obj, DataContextType } from "../Contexts/MainContext";

export default function CardXL(props: Obj) {
  const { toggleBookmark } = useContext(DataContext) as DataContextType;

  return (
    <div
      className="relative mx-2 my-2 h-[25vh] min-w-[35vw] gap-x-2 rounded-2xl bg-cover bg-center p-2 font-semibold shadow-xl xl:h-[28vh]"
      style={{ backgroundImage: `url(${props.cover})` }}
    >
      <div className="absolute bottom-1 left-1 right-1 m-auto rounded-2xl bg-slate-600/30 px-2 py-1 pl-5 ">
        {props.date} ·{" "}
        <span className=" mr-1 ">
          {props.type === "Movie" ? (
            <RiFilmFill className="inline" />
          ) : (
            <RiTvLine className="inline" />
          )}
        </span>
        {props.type} · {props.classification}
        <h1 className="text-xl font-bold"> {props.title}</h1>
      </div>
      <div
        className="absolute right-4 top-4 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-gray-500/50  transition hover:scale-125 active:scale-150"
        onClick={() => toggleBookmark(props.id)}
      >
        {props.bookmarked ? (
          <RiBookmarkFill className=" inline text-lg" />
        ) : (
          <RiBookmarkLine className=" inline text-lg" />
        )}
      </div>
    </div>
  );
}
