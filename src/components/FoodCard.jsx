import React, { useState } from 'react'

function FoodCard (props) {
  const [isSelected, setIsSelected] = useState(props.isSelected)
  const statefulBG = `${isSelected ? 'bg-amber-400' : 'bg-amber-200'}`
  const styles = `flex gap-2 justify-center rounded-md p-2 cursor-pointer ${statefulBG}`
  return (
    <button onClick={() => props.onClick(props, setIsSelected)} className={styles}>
      <span>{props.emoji}</span>
      <p>{props.name}</p>
    </button>
  )
}

export default FoodCard
