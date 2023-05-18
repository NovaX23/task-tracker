import Note from "./Note"

const Notes = (props) => {


    return (
        <div className="notes">
            {props.allNotes.map(item => {
                return (
                    <Note 
                    key={item.id} 
                    item={item} 
                    onDelete={props.onDelete}
                    />
                )
            })}
        </div>
    )
}

export default Notes;