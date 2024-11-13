/* eslint-disable no-case-declarations */
import { TOGGLE_DARK_MODE } from "../actions/darkModeActions";

const initialState = JSON.parse(localStorage.getItem('darkMode')) || false;

const darkModeReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_DARK_MODE:
      const newDarkModeState = !state;
      localStorage.setItem('darkMode', newDarkModeState);
      
      return newDarkModeState;
    default:
      return state;
  }
};

export default darkModeReducer;
