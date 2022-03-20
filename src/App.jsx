import React from 'react'
import FixedBar from './Components/FixedBar/FixedBar'
import FixedMenu from './Components/FixedMenu/FixedMenu'
import EmailSection from './Components/EmailSection/EmailSection'

export default function App() {
  return (
    <div className='App'>
        <FixedMenu/>
        <FixedBar/>
        <EmailSection/>
    </div>
  )
}
