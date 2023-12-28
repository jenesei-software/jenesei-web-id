import i18n from "i18next";
import ru from "./ru.json";
import eng from "./eng.json";

i18n.init({
  interpolation: { escapeValue: false },
  lng: "eng",
  resources: {
    ru,
    eng,
  },
});

export { i18n };
