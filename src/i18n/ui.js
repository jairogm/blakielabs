import { getRelativeLocaleUrl } from "astro:i18n";
import en from "./en.js";
import es from "./es.js";

export const languages = { en: "EN", es: "ES" };
export const defaultLang = "en";
export const socialLinks = [
  { id: "instagram", label: "Instagram", href: "https://www.instagram.com/blakie.labs/" },
  { id: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/company/blakie-labs/" }
];

const dictionaries = { en, es };

// Pick the dictionary for a locale, falling back to the default language.
export function useTranslations(lang) {
  return dictionaries[lang] ?? dictionaries[defaultLang];
}

// Resolve the active locale for the current render.
export function getLang(astro) {
  return astro.currentLocale ?? defaultLang;
}

// Build a locale-aware internal href, preserving any query/hash and keeping a
// trailing slash on the path so links match the site's existing convention.
export function localizePath(lang, path = "/") {
  const match = path.match(/^([^?#]*)([?#].*)?$/);
  const rawBase = match?.[1] || "/";
  const suffix = match?.[2] || "";
  let base = getRelativeLocaleUrl(lang, rawBase);
  if (!base.endsWith("/")) base += "/";
  return base + suffix;
}

// Given the current request, return the URL of the SAME page in each locale.
// Used by the language switcher and the hreflang alternate links.
export function getAlternateUrls(astro) {
  const logical = astro.url.pathname.replace(/^\/es(?=\/|$)/, "") || "/";
  return {
    en: localizePath("en", logical),
    es: localizePath("es", logical)
  };
}
