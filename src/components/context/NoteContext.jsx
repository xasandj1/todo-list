import { createContext,useState } from "react";
import { uz,ru } from "../../language";

const Context = createContext()

export function NoteProvider({children}) {
    const [leng , setLeng] = useState(uz)
    const [iconLang, setIconLang] = useState(false)
    const [text, setText] = useState("")
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
       text
    }}>
        {children}
    </Context.Provider>
  )
}
export default Context
