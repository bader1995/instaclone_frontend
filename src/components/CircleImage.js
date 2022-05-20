import React from 'react'

export const CircleImage = ({ label, src, customeStyle }) => {
  return (
    <div style={{ ...style, backgroundImage: `url(${src})`, ...customeStyle }}></div>
  )
}

const style = {
    borderRadius: '50%',
    height: '50px',
    width: '50px',
    border: 'solid 2px #F78236',
    padding: '0.5px',
    backgroundSize: 'cover'
}