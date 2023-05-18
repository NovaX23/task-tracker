
import './App.css';

import { useState } from 'react';
import CreateNote from './components/CreateNote';
import Notes from "./components/Notes"
import Header from "./components/Header"
import Footer from './components/Footer';


const App = () => {

  const [allNotes, setAllNotes] = useState([])

  const handleAddNote = (note) => {

    setAllNotes(prevNotes => {
      return [
        ...prevNotes,
        note
      ]
    })
  }

  const handleDelete = (note) => {
    console.log(note.id);

    const newAllNotes = allNotes.filter(item => item.id !== note.id)

    setAllNotes(newAllNotes);

  }

  return (
    <div className="App">

      <Header />

      <CreateNote onAddNote={handleAddNote} />

      <Notes allNotes={allNotes} onDelete={handleDelete} />

      <Footer />

    </div>
  );
}

export default App;
