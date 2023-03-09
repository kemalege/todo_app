
import { Action } from "../actions"
import { ActionType } from "../action_types"
import { Note } from "../reducers/notesReducer"


export const addNote = (title:string):Action => {
    return {type: ActionType.ADD_NOTE, payload: title}
}
export const checkDone = (id:number):Action => {
    return {type: ActionType.CHECK_DONE, payload: id}
}
export const deleteNote = (id:number):Action => {
    return {type: ActionType.DELETE_NOTE, payload: id}
}
export const updateNote = (note:Note):Action => {
    return {type: ActionType.UPDATE_NOTE, payload: note}
}