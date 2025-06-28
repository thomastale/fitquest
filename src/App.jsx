import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import ModulePreview from "./ModulePreview";
import ProgressiveOverload from "./ProgressiveOverload";
import Settings from "./Settings";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/module" element={<ModulePreview />} />
        <Route path="/progressive-overload" element={<ProgressiveOverload />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}
