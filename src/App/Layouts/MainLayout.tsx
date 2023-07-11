import NavBar from "../Components/NavBar";
import SearchBar from "../Components/SearchBar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="flex min-h-screen min-w-[350px] flex-col bg-emerald-500/50 xl:flex-row">
      <NavBar />
      <div className="ml-4 mt-4 md:mt-6 xl:ml-2 xl:w-full">
        <SearchBar />
        <div className="flex flex-col justify-center py-3  md:mt-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
