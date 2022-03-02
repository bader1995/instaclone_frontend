import React from 'react'
import UploadImage from '../assets/img/uploadImg.svg'
import { FiUpload, GrImage, IconName, IoIosImages } from "react-icons/io";
import { AiOutlineClose } from 'react-icons/ai';

export const AddPost = ({ onCloseClick }) => {
  return (
    <div style={containerStyle}>
        <div style={actionStyle}>
            <div style={{ display: 'grid', gridTemplateColumns: 'auto 6%', textAlign: 'center', borderBottom: 'solid 1px #DBDBDB', height: '45px' }}>
                <p style={{ fontSize: '16px', fontWeight: '400', marginTop: '15px' }}>Create new post</p>
                <AiOutlineClose size={20} style={{ marginTop: '12px', cursor: 'pointer' }} onClick={() => onCloseClick()} />
            </div>
            <div style={{ textAlign: 'center' }}>
                <IoIosImages style={{ fontSize: '80px' }} />
                <p style={{ display: 'block', marginBottom: '20px', marginTop: '10px', fontSize: '16px' }}>Drag photos and videos here</p>
                <button style={{ margin: '0 auto', backgroundColor: '#0095F6', color: 'white', border: 'none', padding: '8px 15px 5px 15px', fontSize: '14px', borderRadius: '4px' }}>Select from computer</button>
            </div>
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
    width: '550px',
    height: '400px',
    backgroundColor: 'white',
    display: 'grid',
    gridTemplateColumns: 'auto',
    borderRadius: '15px',
    margin: '0 auto',
    marginTop: '10%'
}