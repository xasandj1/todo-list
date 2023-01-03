import React, { useContext, useState } from 'react'
import Context from './context/NoteContext'
import Card from "./Ul/Card"
import Button from "./Ul/Button"
import {GoPencil} from "react-icons/go"
const AddNote = () => {
    const [ active, setActive] = useState(false)
    const {leng} = useContext(Context)
    const [title , setTitle] = useState("")
    const [text,setText] = useState("")
    const titleChange = (e)=>{
        setTitle(e.target.value) 
    }
    const textChange = (e)=>{
        setText (e.target.value)     
    }
    const addActive = ()=>{
        setActive(!active)
    }
    const noteSubmit = (e) =>{
        e.preventDefault()
        if (title.trim() !== "" || text.trim() !== "") {
            const newNote = {
                id:new Date().getTime().toString(),
                title:title,
                text:text,
                time:new Date().toLocaleDateString()
            }
        }
    }
  return (
    <>
    <div className={`add-note ${active ? "active" : ''}`}>
        <Card classes={"card"}>
            <form onSubmit={noteSubmit}>
                <h2 className='title'>{leng.addNote}</h2>
                <label className='add-label'>
                    {leng.inputTitle}
                    <input type="text" placeholder={leng.inputTitle} className="add-input" value={title} onChange={titleChange}/>                   
                </label>
                <label className='add-label'>
                    {leng.inputText}
                    <input type="text" placeholder={leng.inputTitle} className="add-input" value={text} onChange={textChange}/>
                </label>
                <div className='note-btn'> 
                    <Button classes={"btn-danger"} click={addActive}>
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