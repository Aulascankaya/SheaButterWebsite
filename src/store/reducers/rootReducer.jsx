import { combineReducers } from "redux";
import languageReducer from "./languageReducer";
import darkModeReducer from "./darkModeReducer";

export const rootReducer = combineReducers({
  language: languageReducer,
  darkMode: darkModeReducer,
});
