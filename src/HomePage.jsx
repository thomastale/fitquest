import { useNavigate } from "react-router-dom";
import { BadgeCheck, Dumbbell, BarChart, ArrowRight, Settings } from "lucide-react";
import { motion } from "framer-motion";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div
      className="max-w-[393px] mx-auto mt-6 border border-gray-300 rounded-3xl overflow-hidden shadow-lg bg-white"
      style={{ width: 393, height: 852 }}
    >
      {/* Header */}
      <div className="relative flex items-center justify-center h-[60px] bg-gray-100 rounded-md shadow-sm mb-6 px-4">
        <h1 className="text-xl font-bold">FitQuest</h1>
        <Settings
          className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500 hover:text-black cursor-pointer"
          onClick={() => navigate("/settings")}
        />
      </div>

      {/* Progress Bar */}
      <div className="mb-6 px-4">
        <div className="flex items-center justify-between mb-1">
          <span className="text-sm font-medium">Your Progress</span>
          <span className="text-xs text-gray-500">50% complete</span>
        </div>
        <div className="h-4 rounded bg-gray-300">
          <div className="bg-green-500 h-4 rounded" style={{ width: "50%" }}></div>
        </div>
      </div>

      {/* Badges */}
      <div className="grid grid-cols-3 gap-4 mb-8 px-4">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center shadow-sm border border-black">
            <BadgeCheck className="h-5 w-5 text-gray-600" />
          </div>
          <p className="text-xs font-bold mt-2">Quiz Master</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center shadow-sm border border-black">
            <Dumbbell className="h-5 w-5 text-gray-600" />
          </div>
          <p className="text-xs font-bold mt-2">Strength Starter</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center shadow-sm border border-black">
            <BarChart className="h-5 w-5 text-gray-600" />
          </div>
          <p className="text-xs font-bold mt-2">Progress Pro</p>
        </div>
      </div>

      {/* Modules */}
      <div className="space-y-6 px-4">
        {[
          {
            label: "Progressive Overload",
            path: "/progressive-overload",
            tooltip: "Start your strength journey!",
          },
          {
            label: "Biomechanics",
            path: "/biomechanics",
            tooltip: "Learn how your body moves!",
          },
          {
            label: "Nutrition",
            path: "/nutrition",
            tooltip: "Fuel your gains!",
          },
          {
            label: "Muscle Groups",
            path: "/muscle-groups",
            tooltip: "Know what you're working!",
          },
        ].map((module, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            className="relative bg-blue-500 text-white rounded-md p-4 shadow-md flex items-center justify-between border-2 border-white cursor-pointer"
            onClick={() => navigate(module.path)}
          >
            <p className="font-bold text-sm">{module.label}</p>
            <ArrowRight className="h-5 w-5" />
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 text-[10px] text-white bg-black rounded border border-white"
            >
              {module.tooltip}
              <div className="w-2 h-2 bg-black rotate-45 absolute left-1/2 -translate-x-1/2 top-full -mt-1 border-l border-b border-white"></div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}