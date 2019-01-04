import * as types from "./actionTypes";
import messages_en from "../translations/en.json";
import messages_fr from "../translations/fr.json";

export const setEnglishLanguage = () => {
  return {
    type: types.SET_ENGLISH,
    payload: {
      title: "Français",
      locale: "en",
      messages: messages_en
    }
  };
};

export const setFrenchLanguage = () => {
  return {
    type: types.SET_FRENCH,
    payload: {
      title: "English",
      locale: "fr",
      messages: messages_fr
    }
  };
};
