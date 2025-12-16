import { useState } from "react";

interface NoteFormProps {
  onAdd: (text: string) => void;
}

function NoteForm({ onAdd }: NoteFormProps) {
  const [text,setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

  if (!text) return;

  onAdd(text);
  setText("")
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter note..."
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default NoteForm