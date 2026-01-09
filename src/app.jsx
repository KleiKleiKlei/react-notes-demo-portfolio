import { useState, useEffect } from "react";

function App() {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes"));
    return savedNotes || [];
  });

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    if (!note.trim()) return;
    setNotes([...notes, note]);
    setNote("");
  };

  const deleteNote = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <h1 className="title">Klei</h1>
      <p className="subtitle">Simple Notes App</p>

      <div className="input-group">
        <input
          type="text"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Write a note..."
        />
        <button onClick={addNote}>Add</button>
      </div>

      <ul className="notes">
        {notes.map((n, i) => (
          <li key={i}>
            {n}
            <button onClick={() => deleteNote(i)}>✕</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
