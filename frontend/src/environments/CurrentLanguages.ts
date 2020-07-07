import { languages } from './enum.languages';

export function CurrentLanguage(language: string) {
  if (language == languages.en) {
    return languages.en;
  }
  else if (language == languages.es) {
    return languages.es;
  }
  return languages.pt;
}
