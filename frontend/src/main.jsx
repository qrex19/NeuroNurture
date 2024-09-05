import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import SignUp from "./Components/SignUp";
import Landing from "./Components/Landing";
import Quizes from "./Components/Quizes";
import Material from "./Components/Material";
import Profile from "./Components/Profile";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/landing" element={<Landing />} />
      <Route path="/quizes" element={<Quizes />} />
      <Route path="/material" element={<Material />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  </Router>
);
