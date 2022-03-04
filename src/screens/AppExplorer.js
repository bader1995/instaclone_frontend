import React, {useState} from 'react'
import {AppTopBar} from "../components/AppTopBar";
import ProfilePicture from "../assets/img/profile.jpg";
import {FaComment, FaImages} from "react-icons/fa";
import {AiFillHeart} from "react-icons/ai";
import {ModalPost} from "../components/ModalPost";

export const AppExplorer = () => {

    const [showHoverData, setShowHoverData] = useState(false);
    const [showPostModal, setShowPostModal] = useState(false);

    return (
        <>
            { showPostModal && <ModalPost onCloseClick={() => setShowPostModal(false)} /> }
            <div style={mainContainer}>
                <AppTopBar customeStyle={{ zIndex: 1 }} />
                <div style={contentContainer}>

                    <div style={{ position: 'relative', cursor: 'pointer' }} onClick={() => setShowPostModal(true)} onMouseOver={() => setShowHoverData(true)} onMouseLeave={() => setShowHoverData(false)}>
                        <div style={{ ...imageContainer, backgroundImage: `url(${ProfilePicture})` }}>
                            <FaImages size={27} style={{ float: 'right', marginRight: '10px', marginTop: '10px', color: 'white' }} />
                        </div>
                        {
                            showHoverData &&
                            <div style={overlay}>
                                <div style={{ display: 'grid', gridTemplateColumns: '27% 8% 10% 10% 10% 10% 25%', marginTop: '40%' }}>
                                    <p></p>
                                    <AiFillHeart style={{ color: 'white', fontSize: '20px', marginTop: '9px' }} />
                                    <p style={{ color: 'white', fontSize: '14px', marginTop: '45%', fontWeight: 'bold' }}> 61K</p>
                                    <p></p>
                                    <FaComment style={{ color: 'white', fontSize: '20px', marginTop: '9px' }} />
                                    <p style={{ color: 'white', fontSize: '14px', marginTop: '45%', fontWeight: 'bold' }}> 850</p>
                                </div>
                            </div>
                        }
                    </div>

                    <div style={{ ...imageContainer, backgroundImage: `url(${ProfilePicture})` }}>
                        <FaImages size={27} style={{ float: 'right', marginRight: '10px', marginTop: '10px', color: 'white' }} />
                    </div>
                    <div style={{ ...imageContainer, backgroundImage: `url(${ProfilePicture})` }}>
                        <FaImages size={27} style={{ float: 'right', marginRight: '10px', marginTop: '10px', color: 'white' }} />
                    </div>
                    <div style={{ ...imageContainer, backgroundImage: `url(${ProfilePicture})` }}>
                        <FaImages size={27} style={{ float: 'right', marginRight: '10px', marginTop: '10px', color: 'white' }} />
                    </div>
                    <div style={{ ...imageContainer, backgroundImage: `url(${ProfilePicture})` }}>
                        <FaImages size={27} style={{ float: 'right', marginRight: '10px', marginTop: '10px', color: 'white' }} />
                    </div>
                    <div style={{ ...imageContainer, backgroundImage: `url(${ProfilePicture})` }}>
                        <FaImages size={27} style={{ float: 'right', marginRight: '10px', marginTop: '10px', color: 'white' }} />
                    </div>
                    <div style={{ ...imageContainer, backgroundImage: `url(${ProfilePicture})` }}>
                        <FaImages size={27} style={{ float: 'right', marginRight: '10px', marginTop: '10px', color: 'white' }} />
                    </div>

                </div>
            </div>
        </>
    )
}

const mainContainer = {
    backgroundColor: '#FAFAFA',
    display: 'block',
}

const contentContainer = {
    display: 'grid',
    gridTemplateColumns: '30% 30% 30%',
    margin: '0 auto',
    width: 1080,
    paddingTop: '90px',
    paddingBottom: '30px'
}

const imageContainer = {
    height: '300px',
    margin: '10px',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    cursor: 'pointer'
}

const overlay = {
    position: 'absolute',
    top: 9,
    bottom: 0,
    left: 9,
    right: 0,
    height: '94%',
    width: '94.5%',
    opacity: 1,
    transition: '.5s ease',
    backgroundColor: 'rgba(19,19,19,0.6)',
    display: 'inline',
    textAlign: 'center',
}