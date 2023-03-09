import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../redux/export";
import { State } from "../redux/reducers";
import { useState} from "react"
import Checkbox from "./Checkbox";
import NoteComponent from "./NoteComponent";

const Notes = () => {

  const { notes } = useSelector((state: State) => state.notesReducer);
  
  return (
    <div>
      <hr className="mb-2"/>
      <ul>
        {notes.map((note,index) => { 
          return (!note.done?
            <NoteComponent key={note.id} note={note} index={index} />
          : "");
        })}
      </ul>
    </div>
  );
};

export default Notes;
