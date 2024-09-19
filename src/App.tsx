import { useState } from 'react'
import './App.css'
import ModalComponent from './components/Modal/ModalComponent'

function App() {
const [isOpen,setIsOpen] = useState(false)
  return (
    <ModalComponent setIsOpen={setIsOpen } open={isOpen}/>
  )
}

export default App
