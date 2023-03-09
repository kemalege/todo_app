import React, { KeyboardEvent } from "react";
import { ChangeEvent } from "react";

interface NewNoteInputProps {
  addNote(note: string): void;
}

const NewNoteInput: React.FC<NewNoteInputProps> = ({ addNote }) => {
  const [note, setNote] = React.useState("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNote(event.target.value);
  };
  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && note && note.trim().length!==0) {
      addNote(note);
      setNote("");
    }
  };
  const onAddNoteClick = () => {
    if (note && note.trim().length!==0) {
      addNote(note);
      setNote("");
    }
  };
  return (
    <div className="flex justify-center">
      <input
        className="font-note text-todo-white hover:translate-x-[-4px] placeholder-opacity-0 hover:placeholder-opacity-100 bg-transparent focus:outline-none border-b transition duration-200"
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        value={note}
        type="text"
        name="note"
        placeholder="Something to do..."
      />
      <div className="ml-2 px-2 text-todo-white border-l">
        <button
          className="wp px-2 py-1 outline-offset-4 font-note rounded-md shadow-md bg-transparent bg-gradient-to-r from-pink-500/50 to-violet-500/50 hover:to-violet-400/50 hover:scale-105"
          onClick={onAddNoteClick}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default NewNoteInput;
