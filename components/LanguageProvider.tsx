"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { en, tr, type Dictionary } from "@/content/dictionaries";

type Locale = "en" | "tr";

type LanguageContextValue = {
  locale: Locale;
  t: Dictionary;
  setLocale: (l: Locale) => void;
};

const dictionaries: Record<Locale, Dictionary> = { en, tr };
const STORAGE_KEY = "veni_lang";

const LanguageContext = createContext<LanguageContextValue>({
  locale: "en",
  t: en,
  setLocale: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (stored && dictionaries[stored]) {
      setLocaleState(stored);
      return;
    }
    const browserLang = navigator.language.slice(0, 2);
    if (browserLang === "tr") setLocaleState("tr");
  }, []);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    localStorage.setItem(STORAGE_KEY, l);
  }, []);

  return (
    <LanguageContext.Provider
      value={{ locale, t: dictionaries[locale], setLocale }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
