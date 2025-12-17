import React, { useState } from 'react';

interface NoteFormProps {
  onAdd: (text: string) => void;
}

function NoteForm({ onAdd }: NoteFormProps) {
  const [value, setValue] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!value.trim()) return;
    
    onAdd(value); 
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={value} 
        onChange={(e) => setValue(e.target.value)} 
      />
      <button type="submit">Add Note</button>
    </form>
  );
}

export default NoteForm;