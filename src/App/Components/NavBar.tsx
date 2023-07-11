import { NavLink } from "react-router-dom";
import {
  RiFilmFill,
  RiBookmarkFill,
  RiFunctionFill,
  RiTvLine,
} from "react-icons/ri";
import { MdMovie } from "react-icons/md";

export default function NavBar() {
  return (
    <nav className=" sticky top-0 flex h-12 items-center justify-center border-b-2 border-slate-800 bg-slate-800 text-blue-300/75 shadow-lg transition md:top-2 md:mx-4 md:rounded-xl xl:top-[1.5vh]  xl:h-fit xl:min-h-[97vh] xl:flex-col xl:px-6 xl:py-4">
      <div className="ml-4 text-2xl font-semibold uppercase hover:underline xl:mx-auto xl:mb-8">
        <MdMovie className="text-3xl text-red-600 xl:text-4xl" />
      </div>
      <ul className="mx-auto flex items-center justify-center gap-x-3 md:gap-x-4 xl:mx-0 xl:mb-auto xl:flex-col xl:gap-y-6">
        <NavLink to="/" title="Home">
          <RiFunctionFill className="text-2xl transition hover:scale-125 hover:text-blue-200/95 active:animate-ping xl:text-3xl" />
        </NavLink>
        <NavLink to="movies" title="Movies">
          <RiFilmFill className="text-2xl transition hover:scale-125 hover:text-blue-200/95 active:animate-ping xl:text-3xl" />
        </NavLink>
        <NavLink to="tv-series" title="TV Series">
          <RiTvLine className="text-2xl transition hover:scale-125 hover:text-blue-200/95 active:animate-ping xl:text-3xl" />
        </NavLink>
        <NavLink to="bookmark" title="Bookmark">
          <RiBookmarkFill className="text-2xl transition hover:scale-125 hover:text-blue-200/95 active:animate-ping xl:text-3xl" />
        </NavLink>
      </ul>
      <NavLink
        to="profil"
        className=" mr-4 h-8 w-8 overflow-hidden rounded-full border transition xl:mx-auto xl:h-10 xl:w-10"
      >
        <img src="/djinn.jpg" alt="pp" />
      </NavLink>
    </nav>
  );
}
