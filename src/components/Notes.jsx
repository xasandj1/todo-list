import React,{useContext, useState} from 'react'
import { FaTh,FaList } from 'react-icons/fa'
import Context from './context/NoteContext'
import Note from './Note'
import Button from './Ul/Button'

const Notes = () => {
  const {leng,notes,text} = useContext(Context)
  const [active,setActive] = useState(false)
  const noteActive = ()=>{
    setActive(!active)
  }
  let list;
  if (active) {
    list = <><FaTh /><span>{leng.table}</span></>
  }else{
    list = <><FaList /><span>{leng.list}</span></>
  }
  return (
    <div className='container'>
        <div className='allnotes'>
        <h2 className='title'>{leng.infoBar}</h2>
        <Button classes={"btn-primary"} click={noteActive}>
          {list}
        </Button>
        </div>
        <div className={`notes ${active ? "active" : ""}`}>
         {notes.filter((note)=>{
          if(text === ""){
            return note
          }else if(note.title.toString().toLowerCase().includes(text.toLowerCase())){
            return note
          }
         }).map((note)=>(
          <Note note={note} key={note.id}/>
         ))
         }
        </div> 
    </div>
  )
}

export default Notes