import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const CreateNote = (props) => {

    const [note, setNote] = useState({
        id:"",
        title: "",
        content: ""
    })

    const handleChange = (event) => {

        const {name, value} = event.target

        setNote(prevNote => {
            return {
                ...prevNote,
                id:uuidv4(),
                [name]:value
            }
        })

    }

const addNote = (event) => {

    props.onAddNote(note);

    setNote({
      title: "",
      content: ""
    });

    event.preventDefault();
  
}



    return (
        <div>
            <form >
                <input type="text" name="title" value={note.title} onChange={handleChange} placeholder="Note title..."/>

                <textarea name="content" value={note.content}  rows="3" onChange={handleChange} placeholder="Take a note..." ></textarea>

                <button onClick={addNote}>Add</button>
            </form>
            
        </div>
    )
}

export default CreateNote