import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../redux/export";
import { useState } from "react";
import Checkbox from "./Checkbox";
import EditNoteInput from "./EditNoteInput";
import { Note } from "../redux/reducers/notesReducer";

interface NoteProps {
  note: Note,
  index: number
}

const NoteComponent: React.FC<NoteProps> = ({ note, index }) => {
  const dispatch = useDispatch();

  const { checkDone } = bindActionCreators(actionCreators, dispatch);

  const [edit, setEdit] = useState(false);

  const editNote = () => {
    setEdit(!edit);
  };
  return !edit ? (
    <div key={note.id} className="flex justify-between">
      <li className="text-todo-white font-note">{note.title}</li>
      <div className="flex justify-content items-center space-x-2">
        <Checkbox checkDone={checkDone} selectedId={note.id} />
        <button onClick={editNote} className="text-todo-white hover:text-todo-yellow opacity-85">   
          <i className="far fa-edit"></i>
        </button>
      </div>
    </div>
  ) : (
    <EditNoteInput note={note} setEdit={setEdit} edit={edit} />
  );
};

export default NoteComponent;
