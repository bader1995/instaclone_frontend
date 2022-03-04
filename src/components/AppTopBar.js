import React, { useState, useEffect } from 'react'
import MainLogo from '../assets/img/instagram.png'
import { AppInput } from '../components/AppInput'
import { AiOutlineHeart, AiOutlineHome, AiOutlineMessage  } from 'react-icons/ai';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { ImSafari } from 'react-icons/im';
import { CircleImage } from './CircleImage';
import ProfilePicture from '../assets/img/profile.jpg'
import { AddPost } from './AddPost';
import { Link } from 'react-router-dom';
import {LikesNotification} from "./LikesNotification";
import {AppProfileSection} from "./AppProfileSection";

export const AppTopBar = ({ customeStyle }) => {

  const [showCreate, setShowCreate] = useState(false)
  const [showNotification, setShowNotification] = useState(false)
  const [showExtra, setShowExtra] = useState(true)
  const [showProfilInfo, setshowProfilInfo] = useState(false);
  const [windowDimenion, detectHW] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  })

  const detectSize = () => {
    detectHW({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    })
  }

  useEffect(() => {
    window.addEventListener('resize', detectSize)

    return () => {
      window.removeEventListener('resize', detectSize)
    }
  }, [windowDimenion])

  useEffect(() => {
    if(windowDimenion.winWidth > 1080)
    {
      setShowExtra(true)
    }
    else
    {
      setShowExtra(false)
    }
  }, [windowDimenion])

  return (
    <>
        { showCreate && <AddPost onCloseClick={() => setShowCreate(false)} /> }
        <div style={{ ...containerStyle, ...customeStyle }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'auto 60% auto', maxWidth: '50%', margin: '0 auto' }}>
                <Link exact to="/">
                    <img src={MainLogo} style={logoStyle} />
                </Link>
                { showExtra && <AppInput placeholder="Search" customeStyle={searchInputStyle}/> }
                <div style={iconsContainer}>
                    <Link exact to="/"><AiOutlineHome size={25} style={iconStyle} /></Link>
                    <Link to="/direct/inbox/"><AiOutlineMessage size={25} style={iconStyle} /></Link>
                    <IoIosAddCircleOutline size={25} style={iconStyle} onClick={() => setShowCreate(true)} />
                    <Link to="/explore"><ImSafari size={21} style={{ ...iconStyle, marginTop: '2px' }}/></Link>
                    <AiOutlineHeart size={25} style={iconStyle} onClick={() => setShowNotification(!showNotification)} />
                    <div onClick={() => setshowProfilInfo(!showProfilInfo)}>
                        <CircleImage customeStyle={{ width: '20px', height: '20px', cursor: 'pointer' }} src={ProfilePicture} />
                    </div>
                </div>
            </div>
        </div>
        { showNotification && <LikesNotification /> }
        { showProfilInfo && <AppProfileSection /> }
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
    cursor: 'pointer',
    color: 'black'
}