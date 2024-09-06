// import ReactDOM from "react-dom/client";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./Components/Home";
// import SignUp from "./Components/SignUp";
// import Landing from "./Components/Landing";
// import Quizes from "./Components/Quizes";
// import Material from "./Components/Material";
// import Profile from "./Components/Profile";

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
//   <Router>
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/signup" element={<SignUp />} />
//       <Route path="/landing" element={<Landing />} />
//       <Route path="/quizes" element={<Quizes />} />
//       <Route path="/material" element={<Material />} />
//       <Route path="/profile" element={<Profile />} />
//     </Routes>
//   </Router>
// );

import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import SignUp from "./Components/SignUp";
import Landing from "./Components/Landing";
import Material from "./Components/Material";
import Profile from "./Components/Profile";
import Catagory from "./Components/Catagory";
import Quiz from "./Components/Quiz"; // Import QuizCard
import QuizLand from "./Components/QuizLand";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/landing" element={<Landing />} />
      <Route path="/:category/:difficulty/quiz/" element={<Quiz />} />
      <Route path="/material" element={<Material />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/category" element={<Catagory />} />
      <Route path="/quiz" element={<QuizLand />} />
    </Routes>
  </Router>
);
