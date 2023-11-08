import en from "@/locales/en.json";
import pt from "@/locales/pt.json";
export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'pt',
  fallbackLocale: 'pt',
  messages: { en, pt },
}));
