import React from 'react'

export const AppSubmitButton = ({ value, color, onClick, customeStyle }) => {
  return (
    <input type="button" value={value} style={{...style, backgroundColor: color, ...customeStyle}} onClick={() => onClick()} />
  )
}

const style = {
    color: 'white',
    fontWeight: 'bold',
    height: 30,
    border: 'none',
    borderRadius: 5,
    display: 'block',
    width: '102%'
}