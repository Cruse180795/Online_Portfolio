import { Routes, Route } from "react-router";
import HomePage from "./components/pages/HomePage";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}
