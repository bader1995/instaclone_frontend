import React from 'react'

export const AppInput = ({ type, placeholder, value, setValue, customeStyle }) => {
  return (
    <input style={{ ...style, ...customeStyle }} type={type} placeholder={placeholder} value={value} onChange={(e) => setValue(e.target.value)} />
  )
}

const style = {
    height: 35,
    display :'block',
    borderColor: '#DBDBDB',
    borderWidth: '1.5px',
    paddingLeft: 10,
    borderRadius: 3,
    backgroundColor: '#FAFAFA'
}