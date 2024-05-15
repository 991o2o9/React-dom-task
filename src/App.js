import React from 'react'
import Navbar from './components/Navbar'
import MainRouters from './Routers/MainRouters'
const navBarLogo = process.env.PUBLIC_URL + '/img/nav-bar-logo.svg'

const App = () => {
  return (
    <div>
      <Navbar/>
      <MainRouters/>
    </div>
  )
}

export default App
