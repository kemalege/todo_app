import React, {KeyboardEvent} from "react";
import { ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../redux/export";
import { Note } from "../redux/reducers/notesReducer";

interface EditNoteProps {
  note: Note;
  setEdit: React.Dispatch<React.SetStateAction<boolean>>;
  edit: boolean;
}
const EditNoteInput: React.FC<EditNoteProps> = ({ note, setEdit, edit }) => {
  const dispatch = useDispatch();

  const { updateNote } = bindActionCreators(actionCreators, dispatch);

  const [updatedNote, setUpdatedNote] = React.useState<Note>(note);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUpdatedNote({ ...updatedNote, title: event.target.value });
  };
  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && updatedNote.title.trim().length!==0) {
        updateNote(updatedNote);
        setEdit(!edit);
    }
  };
  const onNoteUpdate = () => {
    if(updatedNote.title.trim().length!==0){
      updateNote(updatedNote);
      setEdit(!edit);
    }
     
  };
  return (
    <div className="flex justify-between">
      <input
        className="flex text-todo-grey bg-todo-purple/75 outline-none outline-offset-0 rounded-md focus:bg-todo-blue/75 focus:text-todo-white transition duration-200"
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        value={updatedNote.title}
        type="text"
        name="note"
        placeholder="Note"
      />
      <button onClick={onNoteUpdate}>
      <i className="fa fa-check text-todo-white opacity-85"></i></button>
    </div>
  );
};

export default EditNoteInput;
