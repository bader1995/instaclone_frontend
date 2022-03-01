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
            <FaHome size={20} />
            <FaMailBulk size={20} />
            <FaPlusSquare size={20}/>
            <FaMap size={20}/>
            <FaHeart size={20} />
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
    minWidth: '50px',
    display: 'inline',
    marginTop: '0px',
    marginRight: '10px'
}

const iconsContainer = {
    marginTop: '5px',
    display: 'grid',
    gridTemplateColumns: 'auto auto auto auto auto',
}