// i18n configuration.
//
// Locale strategy: the commercial funnel (home, plant range, plant detail,
// equipment index, about, contact) is fully translated. The deep technical
// library stays in English — that is deliberate, not an oversight: engineering
// handbooks are read by mill engineers who work in English, and machine-
// translated 57,000 words of technical prose would be worse than none.

export const locales = ['en', 'ru', 'es', 'ar'];

export const defaultLocale = 'en';

export const localeMeta = {
  en: { label: 'English', short: 'EN', dir: 'ltr', htmlLang: 'en', ogLocale: 'en_US', flag: '🇬🇧' },
  ru: { label: 'Русский', short: 'RU', dir: 'ltr', htmlLang: 'ru', ogLocale: 'ru_RU', flag: '🇷🇺' },
  es: { label: 'Español', short: 'ES', dir: 'ltr', htmlLang: 'es', ogLocale: 'es_ES', flag: '🇪🇸' },
  ar: { label: 'العربية', short: 'AR', dir: 'rtl', htmlLang: 'ar', ogLocale: 'ar_AR', flag: '🇸🇦' },
};

// Only these locales have translated pages on disk.
export const translatedLocales = ['ru', 'es', 'ar'];

// Which paths exist in each translated locale, so hreflang never points at a
// page that does not exist.
export const translatedPaths = [
  '',
  'flour-milling-plant/',
  'equipment/',
  'about/',
  'contact/',
];

export const localePath = (lang, path = '') => (lang === defaultLocale ? `/${path}` : `/${lang}/${path}`);

// Given a current pathname, work out the equivalent path in another locale.
//
// Only funnel pages exist in ru/es/ar. If the current page is an English-only
// section (knowledge, projects, solutions, legal), every non-English option
// points at that locale's homepage — otherwise the switcher manufactures 404s.
export function switchLocalePath(pathname, target) {
  const stripped = pathname.replace(/^\/(ru|es|ar)(\/|$)/, '/');
  const clean = stripped.startsWith('/') ? stripped : `/${stripped}`;
  const key = clean.replace(/^\//, '');

  if (target === defaultLocale) return clean;

  const exists = clean === '/' || translatedPaths.includes(key);
  return exists ? `/${target}${clean === '/' ? '/' : clean}` : `/${target}/`;
}

// Localise a path only when that page actually exists in the target language.
// Translating the funnel but linking the header at /ru/knowledge/ would ship
// three dead links per locale; untranslated sections fall back to English.
export function localizePath(lang, path) {
  const key = path.replace(/^\//, '');
  const isTranslated = translatedPaths.includes(key) || (key === '' && lang !== defaultLocale);
  if (lang === defaultLocale) return path;
  return isTranslated ? `/${lang}${path === '/' ? '/' : path}` : path;
}
