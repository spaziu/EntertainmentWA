import { useRouteError } from "react-router-dom";

export default function ErrorElement() {
  const error = useRouteError() as Error;

  return (
    <div className="flex h-[70vh] flex-col items-center justify-center">
      <h1 className="text-5xl font-bold text-red-600 ">Error !</h1>
      <p className="mt-4 text-lg font-bold">
        Something went wrong ! <span className="text-2xl">😩</span>
      </p>
      {error.message && <p className="text-lg ">{error.message}</p>}
    </div>
  );
}
