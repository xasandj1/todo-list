import React, { useContext, useState } from 'react'
import Context from './context/NoteContext'
import Card from "./Ul/Card"
import Button from "./Ul/Button"
import {GoPencil} from "react-icons/go"
const AddNote = () => {
    const [ active, setActive] = useState(false)
    const addActive = ()=>{
        setActive(!active)
    }
    const {leng} = useContext(Context)
  return (
    <>
    <div className={`add-note ${active ? "active" : ''}`}>
        <Card classes={"card"}>
            <form>
                <h2 className='title'>{leng.addNote}</h2>
                <label className='add-label'>
                    {leng.inputTitle}
                    <input type="text" placeholder={leng.inputTitle} className="add-input"/>                   
                </label>
                <label className='add-label'>
                    {leng.inputText}
                    <input type="text" placeholder={leng.inputTitle} className="add-input"/>
                </label>
                <div className='note-btn'> 
                    <Button classes={"btn-danger"}>
                        <span>{leng.close}</span>
                    </Button>
                    <Button classes={"btn-secondary"} type="submit">
                        <span>{leng.add}</span>
                    </Button>
                </div>
            </form>
        </Card>
    </div>
    <Button classes={"btn-primary add-btn"} click={addActive}>
        <GoPencil className=''/>
    </Button>
    </>
  )
}

export default AddNote