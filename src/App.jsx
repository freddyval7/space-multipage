import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Navbar from "./components/navbar";
import Destination from "./pages/DestinationPage";
import { useEffect, useState } from "react";
import DestinationComponent from "./components/destination";
import CrewPage from "./pages/CrewPage";
import TripulantComponent from "./components/tripulant";
import TechnologyPage from "./pages/TechnologyPage";
import TechnologyComponent from "./components/technology";
function App() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    setPath(window.location.pathname);
  }, []);

  const searchParams = new URLSearchParams(window.location.search);

  console.log(searchParams.get("planet"));

  return (
    <div
      className={`${
        path === "/"
          ? "homepage"
          : path === "/destination"
          ? "destination"
          : path === "/crew"
          ? "crew"
          : path === "/technology"
          ? "technology"
          : ""
      }`}
    >
      <BrowserRouter>
        <Navbar />
        <div className="md:px-32 px-8 py-4">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/destination" element={<Destination />}>
              <Route path=":planet" element={<DestinationComponent />} />
            </Route>
            <Route path="/crew" element={<CrewPage />}>
              <Route path=":tripulant" element={<TripulantComponent />} />
            </Route>
            <Route path="/technology" element={<TechnologyPage />}>
              <Route path=":number" element={<TechnologyComponent />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
