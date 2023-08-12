import Countries from "./components/Countries";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleCountry from "./components/SingleCountry";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Countries />}></Route>
          <Route path="/:name" element={<SingleCountry />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
