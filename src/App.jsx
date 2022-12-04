import React, { useState } from 'react'
import Schedule from './components/Schedule'
import SelectForm from './components/SelectForm'

function App (props) {
  const [breakfastPreference, setBreakfastPreference] = useState([])
  const [lunchPreference, setLunchPreference] = useState([])
  const [dinnerPreference, setDinnerPreference] = useState([])
  let currentView = null
  if (breakfastPreference.length === 0) {
    currentView = <SelectForm key="bf" title='Breakfast Preferences' preference={breakfastPreference} setPreference={setBreakfastPreference}/>
  } else if (lunchPreference.length === 0) {
    currentView = <SelectForm key="lunch" title='Lunch Preferences' preference={lunchPreference} setPreference={setLunchPreference}/>
  } else if (dinnerPreference.length === 0) {
    currentView = <SelectForm key="dinner" title='Dinner Preferences' preference={dinnerPreference} setPreference={setDinnerPreference}/>
  } else {
    currentView = <Schedule key="schedule" breakfast={breakfastPreference} lunch={lunchPreference} dinner={dinnerPreference}/>
  }
  return (
    <div className='bg-amber-50'>
      {currentView}
    </div>
  )
}

export default App
