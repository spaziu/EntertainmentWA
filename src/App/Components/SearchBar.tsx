import { RiSearchLine } from "react-icons/ri";

export default function SearchBar() {
  // const { allData } = useContext(DataContext);
  // const [search, setSearch] = useState("");

  // function searching(event) {
  //   const text = event.target.value;
  //   setSearch(text);
  // }

  // const seachResult = .filter((e) => e.title.includes(search));

  return (
    <span className="mb-3 mt-1 flex items-center">
      {/* <RiSearchLine className="mr-3 inline cursor-pointer text-2xl text-slate-800  transition hover:scale-125 active:animate-ping xl:text-3xl" /> */}
      <RiSearchLine className="mr-3 inline text-2xl text-slate-800 xl:text-3xl" />
      <input
        type="text"
        className="w-5/6 bg-emerald-500/0 text-xl text-slate-800 placeholder-slate-800 outline-0 transition focus:underline focus:underline-offset-4"
        placeholder="Search for TV show or movies"
      />
    </span>
  );
}
