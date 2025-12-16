import type { Note } from "../types"; 

interface NoteListProps {
  notes: Note[];
}

function NoteList({ notes }: NoteListProps) {
  return (
    <div className="note-list">
      <h3>Your Notes ({notes.length})</h3>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            {note.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NoteList;