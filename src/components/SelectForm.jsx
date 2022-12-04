import React, { useState } from 'react'
import Button from './Button'
import data from '../data'
import FoodCard from './FoodCard'

function SelectForm (props) {
  const [selection, setSelection] = useState(props.preference)
  const toggleSelection = ({ name, emoji, isSelected }, setIsSelected) => {
    // add or delete the food from the selection
    setSelection((prevSelection) => {
      const addToSelection = () => [...prevSelection, { name, emoji }]
      const deleteFromSelection = () => prevSelection.filter(selection => selection.name !== name)
      return isSelected ? deleteFromSelection() : addToSelection()
    })
    // toggle the is selected state of the FoodCard
    setIsSelected((prev) => !prev)
  }
  const foodCardsComponent = data.map((card, i) => <FoodCard onClick={toggleSelection} key={i} isSelected={false} {...card}/>)
  return (
    <div className={'grid justify-center text-center items-center grid-cols-main [&>*]:col-start-2 h-screen ' + props.className}>
      <h1 className='text-2xl '>{props.title}</h1>
      <div className='h-full w-full flex flex-wrap justify-center gap-3'>
        {foodCardsComponent}
      </div>
      <Button className="justify-self-center" onClick={() => props.setPreference(selection)}>Done</Button>
    </div>
  )
}

export default SelectForm
