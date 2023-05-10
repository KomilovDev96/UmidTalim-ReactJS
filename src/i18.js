import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import ru from "./locales/ru.json";
import uz from "./locales/uz.json";
const languages = ["uz", "ru"];
i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        supportedLngs: languages,
        fallbackLng: "uz",
        detection: {
            lookupCookie: "lang",
            lookupLocalStorage: "lang",
            order: ["localStorage"],
        },
        interpolation: {
            escapeValue: true,
        },
        resources: {
            uz: {
                translation: uz,
            },
            ru: {
                translation: ru,
            },
        },
    });

export default i18n;
