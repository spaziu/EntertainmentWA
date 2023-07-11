import CardXS from "./CardXS";

interface Props {
  title: string;
  array: [
    {
      bookmarked: boolean;
      title: string;
      date: number;
      type: string;
      classification: string;
      trending: boolean;
      cover: string;
      id: string;
    }
  ];
}

export default function GridRender({ title, array }: Props) {
  return (
    <div className="mr-4 border-2 border-blue-500 py-3 pl-2">
      <h1 className="mb-3 text-3xl">{title}</h1>
      <div className="flex flex-wrap border-2 border-black">
        {array.length ? (
          array.map((e) => <CardXS {...e} key={e.id} />)
        ) : (
          <p>No bookmark yet ! </p>
        )}
      </div>
    </div>
  );
}
