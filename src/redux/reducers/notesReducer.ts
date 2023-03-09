import { Action } from "../actions/index";
import { ActionType } from "../action_types/index";


export interface Notes<Note> {
  notes: Array<Note>;
}

export interface Note {
  id: number,
  title: string,
  done: boolean;
}

const initialState = {
  notes: [
    { id: 1, title: "Pay the bills", done: false },
    { id: 2, title: "Walk the dog", done: false },
    { id: 3, title: "Do grocery shopping ", done: false },
  ],
};

export const notesReducer = (state: Notes<Note> = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.ADD_NOTE:
      return {
        ...state,
        notes: [
          ...state.notes,
          {
            id: state.notes.length + 1,
            title: action.payload,
            done: false,
          },
        ],
      };
    case ActionType.CHECK_DONE:
      return {
        ...state,
        notes: state.notes.map(note => note.id === action.payload? {...note, done: !note.done}:note)
      }
    case ActionType.DELETE_NOTE:
      // const noteDelete = state.notes.find(note => note.done && note.id === action.payload)
        return {
        ...state,
        notes: state.notes.filter(note => note.id !== state.notes.find(note => note.done && note.id === action.payload)?.id)
      }
    case ActionType.UPDATE_NOTE:
        return {
          ...state,
          notes: state.notes.map(note => note.id === action.payload.id? {...note, title: action.payload.title}: note)
        }
    default:
      return state;
  }
};
