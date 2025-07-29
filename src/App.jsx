import { Routes, Route } from "react-router-dom";
import GetStarted from "./pages/GetStarted";
import Home from "./pages/Home";
import MealDetail from "./pages/MealDetail";
import Layout from "./components/Layout";

export default function App() {
  return (
    <Routes>
      {/* No header for GetStarted */}
      <Route path="/" element={<GetStarted />} />

      {/* Header will show in these routes */}
      <Route element={<Layout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/meal/:id" element={<MealDetail />} />
      </Route>
    </Routes>
  );
}
