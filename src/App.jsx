import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Navbar from "./components/navbar";
import Destination from "./pages/DestinationPage";
import { useEffect, useState } from "react";
import DestinationComponent from "./components/destination";
function App() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
      setPath(window.location.pathname);
  }, []);

  const searchParams = new URLSearchParams(window.location.search);

  console.log(searchParams.get("planet"));

  return (
    <div className={`${path === "/" ? "homepage" : path === "/destination" ? "destination" : ""}`}>
      <BrowserRouter>
        <Navbar />
        <div className="px-32 py-11">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/destination" element={<Destination />}>
              <Route path=":planet" element={<DestinationComponent />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
