import CardXS from "./CardXS";
import { Obj } from "../Contexts/MainContext";

interface Props {
  title: string;
  data: Obj[];
}

export default function MapCardXS({ title, data }: Props) {
  return data.length ? (
    <div className="mr-4  py-3 pl-2">
      <h1 className="mb-3 text-3xl ">{title}</h1>
      <div className="grid grid-cols-2 gap-x-5 md:grid-cols-3 xl:grid-cols-4">
        {data.map((e) => (
          <CardXS {...e} key={e.id} />
        ))}
      </div>
    </div>
  ) : (
    <></>
  );
}
