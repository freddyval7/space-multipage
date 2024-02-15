import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Destination from "./pages/DestinationPage";
import DestinationComponent from "./components/destination";
import CrewPage from "./pages/CrewPage";
import TripulantComponent from "./components/tripulant";
import TechnologyPage from "./pages/TechnologyPage";
import TechnologyComponent from "./components/technology";
function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
