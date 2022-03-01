import React from 'react'
import { CircleImage } from './CircleImage'
import ProfilePicture from '../assets/img/profile.jpg'
import { FaHeart, FaSmile, FaComment, FaFacebookMessenger, FaShare } from 'react-icons/fa';
import { AppInput } from './AppInput';

export const AppPost = () => {
  return (
    <div style={containerStyle}>
        <div style={profileContainer}>
            <CircleImage src={ProfilePicture} customeStyle={profilePictureStyle} />
            <p style={labelStyle}>Jhon Smith</p>
            <p style={optionsIconStyle}>...</p>
        </div>
        <div style={contentContainerStyle}>
          <img src={ProfilePicture} style={assetContentStyle} />
        </div>
        <div style={actionSectionStyle}>
          <FaHeart style={actionIconStyle} />
          <FaComment style={actionIconStyle} />
          <FaFacebookMessenger style={actionIconStyle} />
          <p style={actionIconStyle}>. . .</p>
          <FaShare style={actionIconStyle} />
        </div>
        <div style={interactionsStyle}>
          <p style={{ marginBottom: '10px' }}>12, 045 Likes</p>
          <p style={{ marginBottom: '10px' }}><b>Jhon Smith</b> look at my dog he's cute</p>
          <p style={{ color: 'grey', cursor: 'pointer' }}>View all 24 comments ...</p>
        </div>
        <div style={commentSectionContainer}>
          <FaSmile style={{ fontSize: 23, margin: '0 auto', marginTop: '10px' }} />
          <AppInput type="text" placeholder="Add a comment ..." customeStyle={commentInputStyle} />
          <p style={postButtonStyle}>Post</p>
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
  gridTemplateColumns: '13% 77% 10%'
}

const labelStyle = {
    marginTop: '30px',
    fontWeight: 900
}

const optionsIconStyle = {
  fontSize: '16px',
  marginTop: '25px',
  cursor: 'pointer'
}

const contentContainerStyle = {

}

const assetContentStyle = {
  width: '100%',
  height: '600px'
}

const actionSectionStyle = {
  display: 'grid',
  gridTemplateColumns: '8% 8% 8% 68% 8%'
}

const actionIconStyle = {
  fontSize: 20,
  margin: '0 auto',
  margin: '15px',
  textAlign: 'center',
  cursor: 'pointer'
}

const interactionsStyle = {
  display: 'grid',
  gridTemplateColumns: '100%',
  margin: '15px'
}

const commentInputStyle = {
  width: '98%',
  borderRadius: '0px',
  backgroundColor: 'white',
  border: 'none',
  fontSize: '14px',
  height: '50px'
}

const commentSectionContainer = {
  border: 'solid 1px #EFEFEF',
  display: 'grid',
  gridTemplateColumns: '10% 80% 10%'
}

const postButtonStyle = {
  color: '#0095F6',
  marginTop: '18px',
  marginLeft: '5px',
  fontSize: '14px',
  cursor: 'pointer'
}