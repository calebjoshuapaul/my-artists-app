import { Routes, Route } from "react-router-dom";
import NavBar from "./components/Navigation/NavBar";
import HomePage from "./routes/Home/HomePage";
import ArtistsPage from "./routes/Artists/ArtistsPage";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path=":artistId" element={<ArtistsPage />} />
      </Routes>
    </div>
  );
}

export default App;
