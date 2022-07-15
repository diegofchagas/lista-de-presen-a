import './styles.css'

import React from 'react'

const card = ({name, time}) => {
  return (
    <div className='card'>
        <strong>{name}</strong>
        <small>{time}</small>

    </div>
  )
}

export default card