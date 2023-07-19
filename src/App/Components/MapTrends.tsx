import { DataContext, DataContextType } from "../Contexts/MainContext";
import { useContext } from "react";
import CardXL from "./CardXL";

export default function MapTrends() {
  const { trends } = useContext(DataContext) as DataContextType;

  return (
    <div className="mb-3 grid grid-cols-1">
      <h1 className="mb-3 text-3xl">Trending</h1>
      <div className="flex gap-x-2 overflow-x-auto">
        {trends.map((e) => (
          <CardXL {...e} key={e.id} />
        ))}
      </div>
    </div>
  );
}
