import React from 'react'
import MainLogo from '../assets/img/instagram.png'
import { AppInput } from '../components/AppInput'
import { FaHome, FaMailBulk, FaPlusSquare, FaMap, FaHeart,  } from 'react-icons/fa';

export const AppTopBar = () => {
  return (
    <div style={containerStyle}>
        <img src={MainLogo} style={logoStyle} />
        <AppInput placeholder="Search" customeStyle={searchInputStyle}/>
        <div style={iconsContainer}>
            <FaHome size={25}/>
            <FaMailBulk size={25}/>
            <FaPlusSquare size={25}/>
            <FaMap size={25}/>
            <FaHeart size={25} />
        </div>
    </div>
  )
}

const containerStyle = {
    minHeight: '58px',
    backgroundColor: 'white',
    border: 'solid 1px #DBDBDB',
    paddingLeft: '25%',
    paddingRight: '25%',
    display: 'grid',
    gridTemplateColumns: 'auto auto auto',
    paddingTop: '15px'
}

const logoStyle = {
    maxHeight: '40px',
    display: 'inline'
}

const searchInputStyle = {
    maxWidth: '250px',
    display: 'inline',
    marginTop: '0px'
}

const iconsContainer = {
    marginTop: '5px',
    display: 'grid',
    gridTemplateColumns: 'auto auto auto auto auto auto auto auto',
}