import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./Routes/Home";
import Movies from "./Routes/Movies";
import Bookmark from "./Routes/Bookmark";
import Series from "./Routes/Series";
import Error404 from "./Routes/Error404";
import MainContext, { Loader as LoaderContext } from "./Contexts/MainContext";
import ErrorElement from "./Routes/ErrorElement";
import Profile from "./Routes/Profile";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      loader={LoaderContext}
      element={<MainContext />}
      errorElement={<ErrorElement />}
    >
      <Route index element={<Home />} />
      <Route path="movies" element={<Movies />} />
      <Route path="tv-series" element={<Series />} />
      <Route path="bookmark" element={<Bookmark />} />
      <Route path="profile" element={<Profile />} />
      <Route path="*" element={<Error404 />} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
