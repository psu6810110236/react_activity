import type { Note } from "../types"; 

interface NoteListProps {
  notes: Note[];
  onDelete: (id: number) => void;
}

function NoteList({ notes,onDelete }: NoteListProps) {
  return (
    <div className="note-list">
      <h3>Your Notes ({notes.length})</h3>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            {note.text}
            <button onClick={() => onDelete(note.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NoteList;