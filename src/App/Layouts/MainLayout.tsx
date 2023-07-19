import NavBar from "../Components/NavBar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="flex min-h-screen min-w-[350px] flex-col bg-slate-900 xl:flex-row">
      <NavBar />
      <div className="ml-4 mt-4 text-blue-300/75 md:mt-6 xl:ml-2  xl:w-full">
        <Outlet />
      </div>
    </div>
  );
}
