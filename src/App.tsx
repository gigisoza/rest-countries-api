import Countries from "./components/Countries";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import SingleCountry from "./components/SingleCountry";
import NotFound from "./NotFound";
import CountriesError from "./components/CountriesError";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Countries />} />
      <Route
        path="/:name"
        element={<SingleCountry />}
        errorElement={<CountriesError />}
      />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
