import React, { useState } from 'react'

function Letter({ letterPosition, attempValue }) {
  const [value, setValue] = useState('')
  const [previousValue, setPreviousValue] = useState('')

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  if (value !== previousValue) {
    setPreviousValue(value)
    alert(`You finished the word in row ${attempValue}: ${value}`)
  }

  return <input type="text" value={value} onChange={handleChange} />
}

export default Letter
