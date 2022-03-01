import React from 'react'
import { CircleImage } from './CircleImage'
import ProfilePicture from '../assets/img/profile.jpg'

export const AppPost = () => {
  return (
    <div style={containerStyle}>
        <div style={profileContainer}>
            <CircleImage src={ProfilePicture} customeStyle={profilePictureStyle} />
        </div>
    </div>
  )
}

const containerStyle = {
    backgroundColor: 'white',
    border: 'solid 1px #DBDBDB'
}

const profilePictureStyle = {
    margin: '10px',
    width: '50px',
    height: '50px'
}

const profileContainer = {
  display: 'grid',

}