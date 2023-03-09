import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../redux/export";
import { State } from "../redux/reducers";

const CheckedNotes = () => {
  const dispatch = useDispatch();

  const { deleteNote, checkDone } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const { notes } = useSelector((state: State) => state.notesReducer);

  return (
    <div>
      <hr className="mb-2"/>
      <ul>
        {notes.map((note) => {
          return note.done ? (
            <div key={note.id} className="flex justify-between">
              <li className="text-todo-white">{note.title}</li>
              <div className="flex space-x-2">
                <button onClick={() => checkDone(note.id)}><i className="fa fa-undo opacity-85 text-todo-white hover:text-todo-yellow"></i></button>
                <button onClick={() => deleteNote(note.id)}><i className="fas fa-trash-alt opacity-85 text-todo-white hover:text-todo-yellow"></i></button>
              </div>
            </div>
          ) : (
            ""
          );
        })}
      </ul>
    </div>
  );
};

export default CheckedNotes;
