import { useState, useEffect } from 'react';
import './App.css';
import type { Note } from './types';
import NoteForm from './NoteForm';
import NoteList from './NoteList';

function App() {
  const [notes, setNotes] = useState<Note[]>(() => {
    const saved = localStorage.getItem('notes');
    if (saved) {
      return JSON.parse(saved) as Note[];
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = (text: string) => {
    const newNote: Note = {
      id: Date.now(),
      text: text,
    };
    setNotes([...notes, newNote]);
  };

  const deleteNote = (id: number) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="App">
      <h1>Sticky Notes</h1>
      <NoteForm onAdd={addNote} />
      <NoteList notes={notes} onDelete={deleteNote} />
    </div>
  );
}

export default App;