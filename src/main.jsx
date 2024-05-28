import React from 'react'
import ReactDOM from 'react-dom/client'
import NavBar from './component/NavBar'
import "./component/NavBar.css"
import HeroMenu from './component/Hero'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar/>
    <HeroMenu/>
  </React.StrictMode>
)
