import React, { useContext } from 'react'
import { ThemeContext } from './themeContent'

function ThemeToggle() {
    const {darkmode,setDarkmode} = useContext (ThemeContext);
  return (
    <div>Theme Togggle
        <h2>curreny theme :{darkmode?"Dark":"Ligth"}</h2>
        <button onClick={()=>setDarkmode(!darkmode)}>Toggle Theme</button>
    </div>
  )
}

export default ThemeToggle
