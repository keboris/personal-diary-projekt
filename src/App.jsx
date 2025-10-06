import { Route, Routes } from "react-router";
import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import Entries from "./pages/Entries";
import NewEntry from "./pages/NewEntry";
import About from "./pages/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/entries" element={<Entries />} />
        <Route path="/new" element={<NewEntry />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;
