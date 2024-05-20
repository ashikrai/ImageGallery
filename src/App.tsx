import { useState } from 'react'
// import './App.css'

function App() {
  const API_KEY= import.meta.env.VITE_REACT_APP_PEXELS_API_KEY as string
  return (
    <div className="galleryHeader">
      Image Gallery1 {API_KEY}
    </div>
  )
}

export default App
