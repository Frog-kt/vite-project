import React from 'react'
import Inbox from './components/Inbox'
import Main from './components/Main'
import Navigation from './components/Navigation'
import logo from './logo.svg'

function App() {

  return (
    <div className="App">
      <div className="flex flex-row h-screen bg-gray-100">
        <Navigation />
        <Inbox />
        <Main />
      </div>
    </div>
  )
}

export default App
