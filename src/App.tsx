import NoteForm from "./component/NoteForm";
import NoteList from "./component/NoteList";
import { useState,useEffect } from "react"; 
import type { Note } from "./types";

 function App() {
    const [notes,setNotes] = useState<Note[]>(() => {
        const saved = localStorage.getItem('notes');
        if (saved) {
            return JSON.parse(saved);
        } else {
            return []; // ถ้าไม่มีของเก่า ให้เริ่มด้วยค่าว่าง
        }
    });

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes));
    }, [notes]);

    const addNote = (text: string) =>{
        const newNote : Note ={
            id: Date.now(),
            text: text,
        }
        setNotes([...notes,newNote]);
        console.log("Added:",newNote)
    };
    const deleteNote= (id: number) => {
        setNotes(notes.filter(note => note.id !== id));
    };

    return (
        <div className="App">
            <h1>Test 1st Checkpoint</h1>
            <NoteForm onAdd={addNote}/>
            <NoteList notes={notes} onDelete={deleteNote}/>
        </div>
    )
 }

 export default App