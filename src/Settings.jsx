import { useNavigate } from "react-router-dom";
import { useUserSettings } from "./UserSettingsContext";

export default function Settings() {
  const navigate = useNavigate();
  const { experienceLevel, setExperienceLevel } = useUserSettings();

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

      <h2 className="text-xl font-bold mb-4">Settings</h2>

      <div className="mb-6">
        <label className="block font-semibold mb-2">Experience Level:</label>
        <select
          value={experienceLevel}
          onChange={(e) => setExperienceLevel(e.target.value)}
          className="w-full p-2 rounded-md border"
        >
          <option value="beginner">Beginner</option>
          <option value="advanced">Advanced</option>
        </select>
      </div>

      <p className="text-sm mt-6 text-gray-500">
        (This setting updates feedback across modules)
      </p>
    </div>
  );
}