import React, { useState } from 'react'
import Button from './Button'
import FoodCard from './FoodCard'

const randomIndex = (max) => { return Math.floor(Math.random() * (max)) }

function Schedule (props) {
  const getDaySchedule = () => {
    const { breakfast, lunch, dinner } = props
    const breakfastData = breakfast[randomIndex(breakfast.length)]
    const launchData = lunch[randomIndex(lunch.length)]
    const dinnerData = dinner[randomIndex(dinner.length)]
    return [breakfastData, launchData, dinnerData]
  }

  const getWeekSchedule = () => {
    const weekSchedule = []
    for (let i = 0; i < 7; i++) {
      weekSchedule.push(getDaySchedule())
    }
    return weekSchedule
  }

  const [weekSchedule] = useState(getWeekSchedule())
  // const reloadSchedule = () => setWeekSchedule(getWeekSchedule())
  const scheduleComponents = weekSchedule.map((daySchedule, i) => {
    // console.log(daySchedule)
    return <>
      <h3 key={i}> {`Day ${i + 1}`}</h3>
      <FoodCard key={`${i}l`} {...daySchedule[0]}/>
      <FoodCard key={`${i}b`} {...daySchedule[1]}/>
      <FoodCard key={`${i}d`} {...daySchedule[2]}/>
    </>
  }
  )
  return (
    <div className={'grid grid-cols-main  items-center [&>*]:col-start-2 h-screen ' + props.className }>
      <h1 className='text-center text-3xl'>Week</h1>
      <div className='grid grid-cols-4 text-center gap-3'>
        <h2 className='col-start-2 '>Breakfast</h2>
        <h2>Lunch</h2>
        <h2>Dinner</h2>
        {scheduleComponents}
      </div>
      <Button className="justify-self-center">reload</Button>
    </div>
  )
}

export default Schedule
