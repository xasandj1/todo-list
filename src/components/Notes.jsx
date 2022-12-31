import React,{useContext, useState} from 'react'
import { FaTh,FaList } from 'react-icons/fa'
import Context from './context/NoteContext'
import Note from './Note'
import Button from './Ul/Button'

const Notes = () => {
  const {leng} = useContext(Context)
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
          <Note/>
          <Note/>
          <Note/>
          <Note/>
          <Note/>
          <Note/>
        </div> 
    </div>
  )
}

export default Notes