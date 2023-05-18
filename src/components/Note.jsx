

const Note =(props) => {


    return (
        <div className="note">
            <h1>{props.item.title}</h1>
            <hr />
            <p>{props.item.content}</p>

            <button onClick={()=>{props.onDelete(props.item)}}>X</button>

        </div>
    )
}

export default Note;