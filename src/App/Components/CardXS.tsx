import { RiBookmarkFill, RiBookmarkLine } from "react-icons/ri";
import { useContext } from "react";
import { DataContext } from "../Contexts/MainContext";

interface Props {
  title: string;
  date: number;
  type: string;
  classification: string;
  trending: boolean;
  cover: string;
  id: string;
  bookmarked: boolean;
}

export default function CardXS(props: Props) {
  const { toggleBookmark } = useContext(DataContext);

  return (
    <div className="mx-2 w-full p-2">
      <p>
        {props.date} {props.type} {props.classification}
      </p>
      <h1> {props.title}</h1>
      <p className="cursor-pointer" onClick={() => toggleBookmark(props.id)}>
        {props.bookmarked ? <RiBookmarkFill /> : <RiBookmarkLine />}
      </p>
    </div>
  );
}
