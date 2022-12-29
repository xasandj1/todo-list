import React,{useState} from 'react'
import ruFlag from "../assets/img/ru-lang.svg"
import uzFlag from "../assets/img/uz-lang.svg"
import {FaSearch,FaArrowLeft} from "react-icons/fa"
import Button from '../components/Ul/Button'
import Card from '../components/Ul/Card'
import {CgCloseO} from "react-icons/cg"
import {ru,uz} from "../language"
const Header = () => {
  const [leng , setLeng] = useState(uz)
  const [iconLang, setIconLang] = useState(false)
  const [active, setActive] = useState(false)
  const [text, setText] = useState("")
  const searchChange = (e)=>{
    setText(e.target.value)
  }
  const searchClear = (e)=>{
    setText("")
  }
  const changeLang = (leng)=>{
    leng === 'uz' ? setLeng(ru) : setLeng(uz)
    setIconLang(!iconLang)
  }
  const backHome = ()=>{
    setActive(!active)
    setText("")
  }

  return ( 
    <>
      <Card classes = 'header nav' >
        <div className='head-languages'>
            <button className={`head-lang lang-ru ${!iconLang && 'active'}`} onClick={()=> changeLang("ru")}>
                <span>RU</span>
                <img src={ruFlag} alt='languages'/>
            </button>
            <button className={`head-lang lang-uz ${iconLang && 'active'}`} onClick={()=> changeLang("uz")}>
                <span>UZ</span>
                <img src={uzFlag} alt='languages'/>
            </button>
        </div>
        <div className='container'>
            <h1 className='title text-center'>{leng.title}</h1>
        </div>
        <Button click={backHome}>
          <FaSearch className="icon" />
        </Button>
    </Card>
    <Card classes={`nav search ${active ? 'active': ''}`}>
      <Button click={()=>setActive(!active)}>
        <FaArrowLeft className='icon'/>
      </Button>
      <div className='container'>
        <input type="text" placeholder={leng.search} className='input' value={text} onChange={searchChange}/>
      </div>
      <div className=''>
        <Button click={searchClear}>
          <CgCloseO className='icon' style={{height:"30px",width:"30px"}}/>
        </Button>
      </div>
    </Card>
    </>
  )
}

export default Header