import React from 'react'

export const ActionModal = ({ onCloseClick }) => {
  return (
    <div style={containerStyle}>
        <div style={actionStyle}>
            <p style={{...actionButton, color: '#ED4956', fontWeight: 'bold'}}>Report</p>
            <p style={{...actionButton, color: '#ED4956', fontWeight: 'bold'}}>Unfollow</p>
            <p style={actionButton}>Go to post</p>
            <p style={actionButton}>Share to ...</p>
            <p style={actionButton}>Copy link</p>
            <p style={{...actionButton, border: 'none', color: '#ED4956', fontWeight: 'bold', cursor: "pointer"}} onClick={() => onCloseClick()}>Close</p>
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
    height: '300px',
    backgroundColor: 'white',
    display: 'grid',
    gridTemplateColumns: 'auto',
    borderRadius: '15px',
    margin: '0 auto',
    marginTop: '20%'
}

const actionButton = {
    borderBottom: 'solid 1px #DBDBDB',
    fontSize: '14px',
    textAlign: 'center',
    color: '#262626',
    verticalAlign: 'middle',
    paddingTop: '20px'
}