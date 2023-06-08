import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Carrocel from './Components/Carrocel'
import Titulo from './Components/Titulo'
import Formulario from './Components/Formulario'
import Depoimento from './Components/Depoimento'
import SideBar from './Components/SideBar'


function App() {
 return(<div>
    <SideBar/>
    <Titulo/>
    <Formulario/>
    <Depoimento/>
    <Carrocel/>
      </div> ) 
}

export default App
