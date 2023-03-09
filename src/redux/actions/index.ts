import { Note } from "../reducers/notesReducer";

export interface AddNoteAction {
  type: "ADD_NOTE";
  payload: string;
}

export interface CheckDoneAction {
  type: "CHECK_DONE";
  payload: number;
}

export interface DeleteNoteAction {
  type: "DELETE_NOTE";
  payload: number;
}

export interface UpdateNoteAction {
  type: "UPDATE_NOTE";
  payload: Note
}

export type Action = AddNoteAction | CheckDoneAction | DeleteNoteAction | UpdateNoteAction;
