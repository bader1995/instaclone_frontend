import React from 'react'
import {CircleImage} from "./CircleImage";
import ProfilePicture from "../assets/img/profile.jpg";

export const LikesNotification = ({ customeStyle }) => {
    return (
        <div style={{ ...containerStyle, ...customeStyle }} >
            <p style={{ fontSize: '14px', fontWeight: 'bold', margin: '10px' }}>This month</p>
            <div style={{ display: 'grid', gridTemplateColumns: '13% 24% 43% 20%', width: '100%', margin: '15px' }}>
                <CircleImage src={ProfilePicture} customeStyle={{ width: '40px', height: '40px' }} />
                <p style={{ fontWeight: 'bold', fontSize: '13px', marginTop: '15px' }}>LittleDog458</p>
                <p style={{ marginTop: '15px', fontSize: '13px' }}>liked your comment <span style={{ color: 'grey' }}>1w</span></p>
                <img src={ProfilePicture} style={{ height: '50px', width: "50px" }} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '13% 24% 43% 20%', width: '100%', margin: '15px' }}>
                <CircleImage src={ProfilePicture} customeStyle={{ width: '40px', height: '40px' }} />
                <p style={{ fontWeight: 'bold', fontSize: '13px', marginTop: '15px' }}>LittleDog458</p>
                <p style={{ marginTop: '15px', fontSize: '13px' }}>liked your comment <span style={{ color: 'grey' }}>1w</span></p>
                <img src={ProfilePicture} style={{ height: '50px', width: "50px" }} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '13% 24% 43% 20%', width: '100%', margin: '15px' }}>
                <CircleImage src={ProfilePicture} customeStyle={{ width: '40px', height: '40px' }} />
                <p style={{ fontWeight: 'bold', fontSize: '13px', marginTop: '15px' }}>LittleDog458</p>
                <p style={{ marginTop: '15px', fontSize: '13px' }}>liked your comment <span style={{ color: 'grey' }}>1w</span></p>
                <img src={ProfilePicture} style={{ height: '50px', width: "50px" }} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '13% 24% 43% 20%', width: '100%', margin: '15px' }}>
                <CircleImage src={ProfilePicture} customeStyle={{ width: '40px', height: '40px' }} />
                <p style={{ fontWeight: 'bold', fontSize: '13px', marginTop: '15px' }}>LittleDog458</p>
                <p style={{ marginTop: '15px', fontSize: '13px' }}>liked your comment <span style={{ color: 'grey' }}>1w</span></p>
                <img src={ProfilePicture} style={{ height: '50px', width: "50px" }} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '13% 24% 43% 20%', width: '100%', margin: '15px' }}>
                <CircleImage src={ProfilePicture} customeStyle={{ width: '40px', height: '40px' }} />
                <p style={{ fontWeight: 'bold', fontSize: '13px', marginTop: '15px' }}>LittleDog458</p>
                <p style={{ marginTop: '15px', fontSize: '13px' }}>liked your comment <span style={{ color: 'grey' }}>1w</span></p>
                <img src={ProfilePicture} style={{ height: '50px', width: "50px" }} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '13% 24% 43% 20%', width: '100%', margin: '15px' }}>
                <CircleImage src={ProfilePicture} customeStyle={{ width: '40px', height: '40px' }} />
                <p style={{ fontWeight: 'bold', fontSize: '13px', marginTop: '15px' }}>LittleDog458</p>
                <p style={{ marginTop: '15px', fontSize: '13px' }}>liked your comment <span style={{ color: 'grey' }}>1w</span></p>
                <img src={ProfilePicture} style={{ height: '50px', width: "50px" }} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '13% 24% 43% 20%', width: '100%', margin: '15px' }}>
                <CircleImage src={ProfilePicture} customeStyle={{ width: '40px', height: '40px' }} />
                <p style={{ fontWeight: 'bold', fontSize: '13px', marginTop: '15px' }}>LittleDog458</p>
                <p style={{ marginTop: '15px', fontSize: '13px' }}>liked your comment <span style={{ color: 'grey' }}>1w</span></p>
                <img src={ProfilePicture} style={{ height: '50px', width: "50px" }} />
            </div>

        </div>
    )
}

const containerStyle = {
    display: 'block',
    height: '450px',
    width: '450px',
    border: 'solid 1px #DBDBDB',
    backgroundColor: 'white',
    float:'right',
    position: 'fixed',
    right:'27%',
    marginTop: '80px',
    overflowY: 'scroll',
    overflowX: 'hidden',
    zIndex: 99999,
    boxShadow: '2px 3px rgba(0, 0, 0, 0.05)'
}