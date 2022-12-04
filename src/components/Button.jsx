import React from 'react'

function Button (props) {
  const styles = 'bg-amber-200 rounded-full px-12 py-1 cursor-pointer ' + props.className

  return (
    <button className={styles} onClick={props.onClick}>
      {props.children}
    </button>
  )
}

export default Button
