import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";

import bicep from "./animations/bicep.json";

export default function MuscleGroups() {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [animationData, setAnimationData] = useState(null);

  const question = "Which muscle group is primarily worked during squats?";
  const options = [
    "Biceps",
    "Hamstrings",
    "Quadriceps",
    "Triceps",
  ];

  const correctIndex = 2;

  useEffect(() => {
    setAnimationData(bicep);
  }, []);

  function handleAnswer(index) {
    setSelectedAnswer(index);
    if (index === correctIndex) {
      setFeedback("🔥 You nailed it! Quads carry that squat power!");
    } else {
      setFeedback("Not quite — think legs, not arms.");
    }
  }

  return (
    <div
      className="max-w-[393px] mx-auto mt-6 border border-gray-300 rounded-3xl overflow-hidden shadow-lg bg-white p-6"
      style={{ width: 393, height: 852 }}
    >
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
                  ? "bg-blue-500 border-blue-600 text-white"
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