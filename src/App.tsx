import NoteForm from "./component/NoteForm";
import NoteList from "./component/NoteList";
import { useState } from "react"; 
import type { Note } from "./types";

 function App() {
    const [notes,setNotes] = useState<Note[]>([]);

    const addNote = (text: string) =>{
        const newNote : Note ={
            id: Date.now(),
            text: text,
        }
        setNotes([...notes,newNote]);
        console.log("Added:",newNote)
    };
    return (
        <div className="App">
            <h1>Test 1st Checkpoint</h1>
            <NoteForm onAdd={addNote}/>
            <NoteList notes={notes}/>
        </div>
    )
 }

 export default App