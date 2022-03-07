import React from 'react'

export const ActionSettingsModal = ({ onCloseClick }) => {
  return (
    <div style={containerStyle}>
        <div style={actionStyle}>
            <p style={actionButton}>Change Password</p>
            <p style={actionButton}>Professional Account</p>
            <p style={actionButton}>Nametag</p>
            <p style={actionButton}>Apps and Websites</p>
            <p style={actionButton}>Notifications</p>
            <p style={actionButton}>Privacy and Security</p>
            <p style={actionButton}>Login Activity</p>
            <p style={actionButton}>Emails from Instagram</p>
            <p style={actionButton}>Report a Problem</p>
            <p style={actionButton}>Apps and Websites</p>
            <p style={actionButton}>Log Out</p>
            <p style={{ ...actionButton, cursor: "pointer", borderBottom: "none" }} onClick={() => onCloseClick()}>Cancel</p>
        </div>
    </div>
  )
}

const containerStyle = {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(19,19,19,0.6)',
    zIndex: 99999,
    display: 'block',
    position: 'fixed'
}

const actionStyle = {
    width: '400px',
    height: '500px',
    backgroundColor: 'white',
    display: 'grid',
    gridTemplateColumns: 'auto',
    borderRadius: '15px',
    margin: '0 auto',
    marginTop: '10%'
}

const actionButton = {
    borderBottom: 'solid 1px #DBDBDB',
    fontSize: '14px',
    textAlign: 'center',
    color: '#262626',
    verticalAlign: 'middle',
    paddingTop: '15px'
}