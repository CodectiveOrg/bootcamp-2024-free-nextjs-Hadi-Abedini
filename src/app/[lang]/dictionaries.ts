import "server-only";

export const Languages = ["en", "fa"] as const;

export const validateLanguage = (lang: string): lang is LanguageType =>
  Languages.includes(lang as LanguageType);

export type LanguageType = (typeof Languages)[number];

const dictionaries = {
  en: () =>
    import("../../dictionaries/en.json").then((module) => module.default),
  fa: () =>
    import("../../dictionaries/fa.json").then((module) => module.default),
};

export const getDictionary = async (lang: LanguageType) => {
  if (Languages.includes(lang)) return dictionaries[lang]();
  else return dictionaries.fa();
};
