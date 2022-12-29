import React,{useState} from 'react'
import { FaTh,FaList } from 'react-icons/fa'
import Note from './Note'
import Button from './Ul/Button'

const Notes = () => {
  const [active,setActive] = useState(false)
  const noteActive = ()=>{
    setActive(!active)
  }
  let list;
  if (active) {
    list = <><FaTh /><span>Сетка</span></>
  }else{
    list = <><FaList /><span>Список</span></>
  }
  return (
    <div className='container'>
        <div className='allnotes'>
        <h2 className='title'>Все заметки</h2>
        <Button classes={"btn-primary"} click={noteActive}>
          {list}
        </Button>
        </div>
        <div className={`notes ${active ? "active" : ""}`}>
          <Note/>
          
        </div> 
    </div>
  )
}

export default Notes