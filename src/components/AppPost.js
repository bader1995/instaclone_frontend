import React from 'react'
import { CircleImage } from './CircleImage'
import { AppInput } from './AppInput';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import {AiOutlineComment, AiOutlineHeart, AiOutlineMessage, AiOutlineShareAlt, AiOutlineSmile} from "react-icons/ai";

export const AppPost = ({ customeStyle, onOptionClick, onImageClick, src, fullName}) => {
  return (
    <div style={{ ...containerStyle, ...customeStyle }}>
        <div style={profileContainer}>
            <CircleImage src={src} customeStyle={profilePictureStyle} />
            <p style={labelStyle}>{fullName}</p>
            <BiDotsHorizontalRounded style={optionsIconStyle} onClick={() => onOptionClick()} />
        </div>
        <div style={contentContainerStyle} onClick={() => onImageClick()}>
          <img src={src} style={assetContentStyle} />
        </div>
        <div style={actionSectionStyle}>
          <AiOutlineHeart style={actionIconStyle} />
          <AiOutlineComment style={actionIconStyle} />
          <AiOutlineMessage style={actionIconStyle} />
          <p style={actionIconStyle}>. . .</p>
          <AiOutlineShareAlt style={actionIconStyle} />
        </div>
        <div style={interactionsStyle}>
          <p style={{ marginBottom: '10px' }}>12, 045 Likes</p>
          <p style={{ marginBottom: '10px' }}><b>{ fullName }</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p style={{ color: 'grey', cursor: 'pointer' }}>View all 24 comments ...</p>
        </div>
        <div style={commentSectionContainer}>
          <AiOutlineSmile style={{ fontSize: 23, margin: '0 auto', marginTop: '10px' }} />
          <AppInput type="text" placeholder="Add a comment ..." customeStyle={commentInputStyle} />
          <p style={postButtonStyle}>Post</p>
        </div>
    </div>
  )
}

const containerStyle = {
    backgroundColor: 'white',
    border: 'solid 1px #DBDBDB',
    minWidth: '600px',
    maxWidth: '800px',
    marginBottom: '25px'
}

const profilePictureStyle = {
    margin: '10px',
    width: '50px',
    height: '50px'
}

const profileContainer = {
  display: 'grid',
  gridTemplateColumns: '13% 80% 8%'
}

const labelStyle = {
    marginTop: '30px',
    fontWeight: 900
}

const optionsIconStyle = {
  fontSize: '20px',
  marginTop: '25px',
  cursor: 'pointer'
}

const contentContainerStyle = {
    cursor: 'pointer'
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
  fontSize: 25,
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