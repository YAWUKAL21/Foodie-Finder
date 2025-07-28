
import { Routes, Route } from "react-router-dom";
import GetStarted from "./pages/GetStarted";
import Home from "./pages/Home";
import MealDetail from "./pages/MealDetail";


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<GetStarted />} />
      <Route path="/home" element={<Home />} />
      <Route path="/meal/:id" element={<MealDetail />} />
      
    </Routes>
  );
}

