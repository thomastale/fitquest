import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";

import bicep from "./animations/bicep.json";
import avocado from "./animations/avocado.json";
import dips from "./animations/Dips.json";
import running from "./animations/Running.json";

const animations = [bicep, avocado, dips, running];

export default function ProgressiveOverload() {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [animationData, setAnimationData] = useState(null);

  const question = "What is the primary principle behind progressive overload?";
  const options = [
    "Increasing workout intensity over time",
    "Doing the same workout every day",
    "Skipping rest days",
    "Focusing only on cardio",
  ];

  const correctIndex = 0;

  useEffect(() => {
    // Pick a random animation on mount
    const random = Math.floor(Math.random() * animations.length);
    setAnimationData(animations[random]);
  }, []);

  function handleAnswer(index) {
    setSelectedAnswer(index);
    if (index === correctIndex) {
      setFeedback("🔥 Correct! Keep pushing your limits!");
    } else {
      setFeedback("Nah, fam. Try focusing on gradual intensity.");
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
