import { SET_LANGUAGE } from "../actions/languageActions";
import { dataTR } from "../../Datas/tr";

const initialState = JSON.parse(localStorage.getItem('Language')) || dataTR;

const languageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LANGUAGE:
      localStorage.setItem('Language',JSON.stringify(action.payload));
      return action.payload;
    default:
      return state;
  }
};

export default languageReducer;
