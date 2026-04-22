import { useState } from 'react'
import './App.css'
import AutoCounter from './comp/AutoCounter'
import PostsPage from './PostsPage'

function App() {
  const [showCounter, setShowCounter] = useState(false)

  return (
    <>
    { showCounter && <AutoCounter />}
    <button onClick={() => {
      setShowCounter(show => !show)
    }} className="border-2 border-gray-500 py-2 px-3 rounded-md" >TOGGLE BTN</button>
    <PostsPage />
    </>
  )
}

export default App
