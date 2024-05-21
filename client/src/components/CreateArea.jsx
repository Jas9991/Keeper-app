import React from "react";

function CreateArea(props) {

  const [note , setNote] = React.useState({
    title: "",
    content: ""
  })

  function handleChange(event){
    const {name , value} = event.target;

    setNote(function(prevValue){
      return {
        ...prevValue,
        [name]: value 
      }
    })
  }

  function submitNote(event){
    props.OnAdd(note); 
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault(); 
  }

  return (
    <div>
      <form>
        <input name="title" onChange={handleChange} placeholder="Title" value={note.title}/>
        <textarea name="content" onChange={handleChange} placeholder="Take a note..." rows="3" value={note.content}/>
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
