// import React, { createContext, useState } from "react";

// export const LanguageContext = createContext();

// export function LanguageProvider({ children }) {
//   const [selectedLanguage, setSelectedLanguage] = useState(
//     localStorage.getItem("lang") || "en_US"
//   );

//   const changeLanguage = (lang) => {
//     setSelectedLanguage(lang);
//     console.log("Language changed to:", lang);
//     localStorage.setItem("lang", lang);
//   };

//   return (
//     <LanguageContext.Provider value={{ selectedLanguage, changeLanguage }}>
//       {children}
//     </LanguageContext.Provider>
//   );
// }

import React, { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(Cookies.get("lang") || "en_US"); // Default language from cookies
  const [translations, setTranslations] = useState({}); // Store translations for all fetched languages
  const [loading, setLoading] = useState(true);

  // Fetch translations for a specific language
  const fetchTranslations = async (lang) => {
    if (translations[lang]) return; // Avoid re-fetching if already fetched

    setLoading(true);
    try {
      const response = await axios.get(`http://my.admin.wardil.org/api/lang/${lang}`);
      setTranslations((prev) => ({ ...prev, [lang]: response.data })); // Add new translations to state
      setLoading(false);
    } catch (error) {
      console.error("Error fetching translations:", error);
      setLoading(false);
    }
  };

  // Change language and ensure translations are available
  const changeLanguage = async (lang) => {
    setLanguage(lang);
    Cookies.set("lang", lang); // Save language in cookies
    await fetchTranslations(lang); // Fetch translations for the selected language if not already fetched
  };

  // Initial fetch for the default language
  useEffect(() => {
    fetchTranslations(language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, translations, changeLanguage, loading }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

