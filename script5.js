const fs = require('fs');
let code = `"use client";
import { createContext, useContext, useState, useEffect } from "react";

const TestContext = createContext();

export const TestProvider = ({ children }) => {
  const [userName, setUserName] = useState();
  const [traits, setTraits] = useState({ C_R: 0, S_F: 0, V_D: 0, I_E: 0 });
  const [language, setLanguage] = useState("ko");

  useEffect(() => {
    const savedLang = localStorage.getItem("language");
    if (savedLang) {
      setLanguage(savedLang);
    }
  }, []);

  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  return (
    <TestContext.Provider value={{ userName, setUserName, traits, setTraits, language, setLanguage: changeLanguage }}>
      {children}
    </TestContext.Provider>
  );
};

export const useTest = () => useContext(TestContext);
`;
fs.writeFileSync('C:\\Users\\jason\\Desktop\\sainttest\\src\\app\\context\\context.js', code, 'utf8');
