import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TripPage from "./pages/TripPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TripPage />} />
      </Routes>
    </Router>
  );
}

export default App;
