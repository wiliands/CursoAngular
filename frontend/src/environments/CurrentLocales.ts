import { languages } from './enum.languages';
import { locales } from './enum.locales';

export function CurrentLocale(language: string) {
  if (language == languages.en) {
    return locales.en;
  }
  else if (language == languages.es) {
    return locales.es;
  }
  return locales.pt;
}
