import {useState, FormEvent} from "react";
import Notes from "./components/Notes";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import CheckedNotes from "./components/CheckedNotes";
import AddNoteBoard from "./components/AddNoteBoard";


function App() {
  

  return (
    <Router>
      <div className="bg-todo-purple h-screen bg-gradient-to-t from-violet-500 to-todo-purple">
        <header className="wp bg-black">
          <h1 className="inline-block pl-10 py-2 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 transition duration-200">
            TODO
          </h1>
        </header>
        <AddNoteBoard />
        <div className="pl-0.5 pr-0.5 py-0.5 max-w-lg mt-4 mx-2 lg:mx-auto bg-transparent bg-gradient-to-r from-todo-grey/25 to-slate-500/25 shadow-lg">
          <div className="bg-transparent bg-gradient-to-r from-slate-400/25 to-todo-purple/25">
            <div className="flex flex-col px-5 py-5">
              
              <nav className="flex mx-auto w-48 mt-4 border-t border-x font-note text-todo-white transition duration-300">
                <NavLink className={({ isActive }) => isActive ? "flex basis-1/2 justify-center p-0.5 border-r outline-offset-0 hover:text-todo-yellow bg-todo-purple" : "flex basis-1/2 justify-center p-0.5 border-r outline-offset-0 hover:text-todo-yellow"} to="/todo_app">Notes</NavLink>
                <NavLink className={({ isActive }) => isActive ? "flex basis-1/2 justify-center p-0.5 outline-offset-0 hover:text-todo-yellow bg-todo-purple" : "flex basis-1/2 justify-center p-0.5 outline-offset-0 hover:text-todo-yellow"} to="/checkeddone">Completed</NavLink>
              </nav>

              <Routes>
                <Route path="/todo_app" element={<Notes />} />
                <Route path="/checkeddone" element={<CheckedNotes />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
