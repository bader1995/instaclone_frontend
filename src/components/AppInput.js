import React from 'react'

export const AppInput = ({ type, placeholder, value, onchange, customeStyle }) => {
  return (
    <input style={{ ...style, ...customeStyle }} type={type} placeholder={placeholder} value={value} onchange={() => onchange()} />
  )
}

const style = {
    height: 35,
    display :'block',
    width: '100%',
    borderColor: '#DBDBDB',
    borderWidth: '1.5px',
    paddingLeft: 10,
    borderRadius: 3,
    backgroundColor: '#FAFAFA'
}