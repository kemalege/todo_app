import { combineReducers } from "redux";
import { notesReducer } from "./notesReducer";

export const reducers = combineReducers({
  notesReducer,
});
export type State = ReturnType<typeof reducers>