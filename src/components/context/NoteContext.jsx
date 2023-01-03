import { createContext,useEffect,useState } from "react";
import { uz,ru } from "../../language";

const Context = createContext()

export function NoteProvider({children}) {
    const getLocalStorage = ()=>{
      let notes = localStorage.getItem("notes")
      if (notes) {
        return notes = JSON.parse(localStorage.getItem("notes"))
      }
      else{
        return notes = []
      }
    }
    const [leng , setLeng] = useState(uz)
    const [iconLang, setIconLang] = useState(false)
    const [text, setText] = useState("")
    const [notes,setNotes] = useState(getLocalStorage)
    useEffect(() => {
      localStorage.setItem("notes",JSON.stringify(notes))
    }, [notes]);
    const addNote =(newNote)=>{
      setNotes([newNote,...notes])
    }
    const delNote = (id)=>{
      setNotes(notes.filter((item)=>item.id !== id))
    }
    const changeLang = (leng)=>{
        leng === 'uz' ? setLeng(ru) : setLeng(uz)
        setIconLang(!iconLang)
      }
      
    const searchChange = (e)=>{
        setText(e.target.value)
    }
    const searchClear = (e)=>{
        setText("")
    }
  return (
    <Context.Provider value={{
       leng,
       iconLang,
       changeLang,
       searchClear,
       searchChange,
       text,
       addNote,
       notes,
       delNote
    }}>
        {children}
    </Context.Provider>
  )
}
export default Context
