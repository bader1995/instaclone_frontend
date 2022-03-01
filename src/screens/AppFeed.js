import React from 'react'
import { AppTopBar } from '../components/AppTopBar'
import { AppPost } from '../components/AppPost'

export const AppFeed = () => {
  return (
    <div style={containerStyle}>
        <AppTopBar />
        <div style={postsContainerStyle}>
          <AppPost />
        </div> 
    </div>
  )
}

const containerStyle = {
  backgroundColor: '#FAFAFA',
  paddingBottom: '100px'
}

const postsContainerStyle = {
  paddingLeft: '25%',
  paddingRight: '25%',
  paddingTop: '30px'
}