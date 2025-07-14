// src/UserSettingsContext.js
import { createContext, useContext, useState } from "react";

const UserSettingsContext = createContext();

export function UserSettingsProvider({ children }) {
  const [experienceLevel, setExperienceLevel] = useState("beginner");

  return (
    <UserSettingsContext.Provider value={{ experienceLevel, setExperienceLevel }}>
      {children}
    </UserSettingsContext.Provider>
  );
}

export function useUserSettings() {
  return useContext(UserSettingsContext);
}