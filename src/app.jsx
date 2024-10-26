import { useState } from 'preact/hooks'
import './app.css'
import CardContainer from './components/cardContainer/cardContainer'
import Home from './pages/home/home'

export function App() {

  return (
    <div className=''>
      <div className='p-10 w-full'>
        <Home />
      </div>
    </div>
  )
}
