import { DataContext } from "../Contexts/MainContext";
import { useContext } from "react";
import CardXL from "./CardXL";

interface Props {
  bookmarked: boolean;
  title: string;
  date: number;
  type: string;
  classification: string;
  trending: boolean;
  cover: string;
  id: string;
}

export default function TrendsRender() {
  const { trends } = useContext(DataContext);
  return (
    <div className="mb-3 w-full border-2 border-red-700 py-3 pl-2">
      <h1 className="mb-3 text-3xl">Trending</h1>
      <div className="flex  overflow-x-scroll border-2 border-black">
        {trends.map((e: Props) => (
          <CardXL {...e} key={e.id} />
        ))}
      </div>
    </div>
  );
}
