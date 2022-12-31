import React from 'react'
import AddNote from './components/AddNote'
import { NoteProvider } from './components/context/NoteContext'
import Notes from './components/Notes'
import Header from './layout/Header'

const App = () => {
  return (
    <NoteProvider>
      <Header/>
      <Notes/>
      <AddNote/>
    </NoteProvider>
  )
}

export default App