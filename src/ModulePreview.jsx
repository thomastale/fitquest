ModulePreview.jsx

import { useNavigate } from "react-router-dom";

export default function ModulePreview() {
  const navigate = useNavigate();

  return (
    <div
      className="max-w-[393px] mx-auto mt-6 border border-gray-300 rounded-3xl overflow-hidden shadow-lg bg-white p-6"
      style={{ width: 393, height: 852 }}
    >
      <button
        className="mb-4 text-blue-600 underline"
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>
      <h2 className="text-xl font-bold mb-4">Module Preview</h2>
      <p className="mb-2">Welcome to your first module! Here’s some info and progress tracking.</p>
      <div className="bg-gray-100 rounded p-4 shadow">
        <p>Module content coming soon...</p>
      </div>
    </div>
  );
}
