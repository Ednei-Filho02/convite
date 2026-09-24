import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import DateTime from "./pages/DateTime";
import TypeSelection from "./pages/TypeSelection";
import Places from "./pages/Place";
import Foods from "./pages/Foods";
import Summary from "./pages/Summary";
import Success from "./pages/Success";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/data" element={<DateTime />} />

        <Route
          path="/tipo"
          element={<TypeSelection />}
        />

        <Route
          path="/lugares"
          element={<Places />}
        />

        <Route
          path="/comidas"
          element={<Foods />}
        />

        <Route
          path="/resumo"
          element={<Summary />}
        />

        <Route
          path="/final"
          element={<Success />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;