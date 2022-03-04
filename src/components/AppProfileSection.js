import React, {useState} from 'react'
import {AiOutlineSave, AiOutlineSetting, AiOutlineSwap, AiOutlineUser} from "react-icons/ai";

export const AppProfileSection = () => {

    const [backgroundColor, setBackGroundColor] = useState("white")

    return (
        <div style={containerStyle}>
            <div style={{ ...contentContainer, backgroundColor: backgroundColor }} onMouseOver={() => setBackGroundColor("grey")} onMouseLeave={() => setBackGroundColor("white")}>
                <AiOutlineUser style={iconStyle} />
                <p style={textStyle}>Profile</p>
            </div>
            <div style={contentContainer}>
                <AiOutlineSave style={iconStyle} />
                <p style={textStyle}>Saved</p>
            </div>
            <div style={contentContainer}>
                <AiOutlineSetting style={iconStyle} />
                <p style={textStyle}>Settings</p>
            </div>
            <div style={contentContainer}>
                <AiOutlineSwap style={iconStyle} />
                <p style={textStyle}>Switch Accounts</p>
            </div>
            <div style={{ display: 'block', padding: '20px', cursor: 'pointer', borderTop: 'solid 1px #DBDBDB' }}>
                <p style={textStyle}>Log Out</p>
            </div>
        </div>
    )
}

const containerStyle = {
    display: 'block',
    height: '230px',
    width: '250px',
    border: 'solid 1px #DBDBDB',
    backgroundColor: 'white',
    float:'right',
    position: 'fixed',
    right:'25%',
    marginTop: '80px',
    overflowY: 'hidden',
    overflowX: 'hidden',
    zIndex: 99999,
    boxShadow: '2px 3px rgba(0, 0, 0, 0.05)'
}

const contentContainer = {
    display: 'grid',
    gridTemplateColumns: '20% 80%',
    padding: '13px',
    cursor: 'pointer'
}

const textStyle = {
    fontSize: '13px'
}

const iconStyle = {
    fontSize: '18px'
}