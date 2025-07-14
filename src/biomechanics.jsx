//biomechanics.jsx

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { useUserSettings } from "./UserSettingsContext";

import lunge from "./animations/Dips.json"; // replace with actual lunge animation if you have one

export default function Biomechanics() {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [animationData, setAnimationData] = useState(null);
  const [progress, setProgress] = useState(60);
  const { experienceLevel } = useUserSettings();

  const question = "Which joint primarily controls the depth of a squat?";
  const options = ["Hip", "Wrist", "Ankle", "Shoulder"];
  const correctIndex = 0;

  useEffect(() => {
    setAnimationData(lunge);
  }, []);

  function handleAnswer(index) {
    setSelectedAnswer(index);
    if (index === correctIndex) {
      const feedbackMsg =
        experienceLevel === "beginner"
          ? "✅ Correct! The hips are the key driver in squat depth."
          : "🔥 Nailed it. Proper hip flexion ensures full ROM without spinal compensation.";
      setFeedback(feedbackMsg);
      setProgress(progress + 10);
    } else {
      const incorrectMsg =
        experienceLevel === "beginner"
          ? "Not quite. Think about which joint moves you lower vertically."
          : "Incorrect. Consider which joint initiates the eccentric squat phase.";
      setFeedback(incorrectMsg);
    }
  }

  return (
    <div
      className="max-w-[393px] mx-auto mt-6 border border-gray-300 rounded-3xl overflow-hidden shadow-lg bg-white p-6"
      style={{ width: 393, height: 852 }}
    >
      <div className="mb-4 w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <div
          className="bg-purple-500 h-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <div className="flex flex-col items-center mb-4">
        {animationData && (
          <Lottie animationData={animationData} style={{ width: 160, height: 160 }} />
        )}
      </div>

      <h2 className="text-xl font-bold mb-6">{question}</h2>

      <div className="space-y-3 mb-6">
        {options.map((option, i) => (
          <motion.button
            key={i}
            onClick={() => handleAnswer(i)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`w-full p-3 rounded-md border ${
              selectedAnswer === i
                ? i === correctIndex
                  ? "bg-green-400 border-green-600 text-white"
                  : "bg-red-400 border-red-600 text-white"
                : "bg-gray-100 border-gray-300"
            } font-semibold text-left`}
          >
            {option}
          </motion.button>
        ))}
      </div>

      {feedback && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center text-lg font-bold text-indigo-700"
        >
          {feedback}
        </motion.div>
      )}
    </div>
  );
}