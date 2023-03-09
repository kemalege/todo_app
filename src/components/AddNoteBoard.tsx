import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../redux/export";
import NewNoteInput from "./NewNoteInput";

const AddNoteBoard = () => {
  const dispatch = useDispatch();

  const { addNote } = bindActionCreators(actionCreators, dispatch);
  const onAddNote = (note: string) => {
    addNote(note);
  };

  return (
    <div className="pl-0.5 pr-0.5 py-0.5 max-w-lg mt-10 mx-2 lg:mx-auto bg-transparent bg-gradient-to-r from-todo-grey/25 to-slate-500/25 shadow-lg">
      <div className="bg-transparent bg-gradient-to-r from-slate-400/25 to-todo-purple/25">
        <div className="flex flex-col px-5 py-5 ">
          <NewNoteInput addNote={onAddNote} />
        </div>
      </div>
    </div>
  );
};

export default AddNoteBoard;
