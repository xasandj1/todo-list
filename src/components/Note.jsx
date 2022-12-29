import React from 'react'
import Card from "../components/Ul/Card" 
import Button from './Ul/Button'
import {GoPencil} from "react-icons/go"
import {FaTrashAlt} from "react-icons/fa"
const Note = () => {
  return (
    <Card classes={"card"}>
      <div className='note-info'>
        <h2 className='note-title'>Title</h2>
        <p className='note-time'>07.03.2022</p>

      </div>
      <p className='note-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
      <div className='note-btn'>
        <Button classes={"btn-secondary"}>
          <GoPencil/>
          <span>РЕДАКТИРОВАТЬ</span>
        </Button>
        <Button classes={"btn-danger"}>
          <FaTrashAlt/>
          <span>Удалить</span>
        </Button>
      </div>
    </Card>
  )
}

export default Note