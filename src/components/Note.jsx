import React from 'react'
import Card from "../components/Ul/Card" 
import Button from './Ul/Button'
import {GoPencil} from "react-icons/go"
import {FaTrashAlt} from "react-icons/fa"
import { useContext } from 'react'
import Context from './context/NoteContext'
const Note = ({note}) => {
  const {leng,delNote,editNote} = useContext(Context)
  return (
    <Card classes={"card"}>
      <div className='note-info'>
        <h2 className='note-title'>{note.title}</h2>
        <p className='note-time'>{note.time}</p>

      </div>
      <p className='note-text'>{note.text}</p>
      <div className='note-btn'>
        <Button classes={"btn-secondary"} click={()=>editNote(note)}>
          <GoPencil/>
          <span>{leng.edit}</span>
        </Button>
        <Button classes={"btn-danger"} click={()=>delNote(note.id)}>
          <FaTrashAlt/>
          <span>{leng.del}</span>
        </Button>
      </div>
    </Card>
  )
}

export default Note