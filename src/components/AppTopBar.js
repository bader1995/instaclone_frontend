import React, { useState } from 'react'
import MainLogo from '../assets/img/instagram.png'
import { AppInput } from '../components/AppInput'
import { AiOutlineHeart, AiOutlineHome, AiOutlineMessage  } from 'react-icons/ai';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { ImSafari } from 'react-icons/im';
import { CircleImage } from './CircleImage';
import ProfilePicture from '../assets/img/profile.jpg'
import { AddPost } from './AddPost';

export const AppTopBar = ({ showExtra }) => {

  const [showCreate, setShowCreate] = useState(false)

  return (
    <>
        { showCreate && <AddPost onCloseClick={() => setShowCreate(false)} /> }
        <div style={containerStyle}>
            <div style={{ display: 'grid', gridTemplateColumns: 'auto 60% auto', maxWidth: '50%', margin: '0 auto' }}>
                <img src={MainLogo} style={logoStyle} />
                { showExtra && <AppInput placeholder="Search" customeStyle={searchInputStyle}/> }
                <div style={iconsContainer}>
                    <AiOutlineHome size={25} style={iconStyle} />
                    <AiOutlineMessage size={25} style={iconStyle} />
                    <IoIosAddCircleOutline size={25} style={iconStyle} onClick={() => setShowCreate(true)} />
                    <ImSafari size={21} style={{ ...iconStyle, marginTop: '2px' }}/>
                    <AiOutlineHeart size={25} style={iconStyle} />
                    <CircleImage customeStyle={{ width: '20px', height: '20px', cursor: 'pointer' }} src={ProfilePicture} />
                </div>
            </div>
        </div>
    </>
  )
}

const containerStyle = {
    minHeight: '58px',
    width: '100%',
    backgroundColor: 'white',
    border: 'solid 1px #DBDBDB',
    paddingTop: '15px',
    position: 'fixed',
    display: 'block'
}

const logoStyle = {
    maxHeight: '40px',
    display: 'inline'
}

const searchInputStyle = {
    maxWidth: '250px',
    minWidth: '20px',
    display: 'inline',
    marginTop: '0px',
    marginRight: '10px',
    backgroundColor: '#EFEFEF',
    border: 'none',
    fontSize: '16px',
    borderRadius: '10px',
    margin: '0 auto'
}

const iconsContainer = {
    marginTop: '5px',
    display: 'grid',
    gridTemplateColumns: 'auto auto auto auto auto auto',
    maxWidth: '270px',
    minWidth: '250px',
    paddingRight: '0px'
}

const iconStyle = {
    cursor: 'pointer'
}