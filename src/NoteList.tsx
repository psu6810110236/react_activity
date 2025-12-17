import type { Note } from './types';

interface NoteListProps {
  notes: Note[];
  onDelete: (id: number) => void;
}

function NoteList({ notes, onDelete }: NoteListProps) {
  return (
    <ul>
      {notes.map((note) => (
        <li key={note.id}>
          <span>{note.text}</span>
          <button 
            onClick={() => onDelete(note.id)}
            style={{ marginLeft: '10px', background: '#ff4444', color: 'white' }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default NoteList;