import React, {useState} from 'react'
import ProfilePicture from '../assets/img/profile.jpg'
import {CircleImage} from "./CircleImage";
import {BiDotsHorizontalRounded} from "react-icons/bi";
import {
    AiOutlineClose,
    AiOutlineComment,
    AiOutlineHeart,
    AiOutlineMessage,
    AiOutlineShareAlt,
    AiOutlineSmile
} from "react-icons/ai";
import {AppInput} from "./AppInput";
import {ActionModal} from "./ActionModal";

export const ModalPost = ({ onCloseClick }) => {

    const [showAction, setShowAction] = useState(false);

    return (
        <div style={containerStyle}>
            { showAction && <ActionModal onCloseClick={() => setShowAction(false)} /> }
            <AiOutlineClose onClick={() => onCloseClick()} style={{ display: 'fixed', float: "right", marginRight: '20px', marginTop: '20px', fontSize: '30px', color: 'white', cursor: 'pointer' }}/>
            <div style={contentStyle}>
                <div style={{ ...assetContainer, backgroundImage: `url(${ProfilePicture})` }}>
                </div>
                <div style={commentContainer}>
                    <div style={commentContainerHeader}>
                        <CircleImage src={ProfilePicture} customeStyle={{ width: '40px', height: '40px', margin: '10px 0px 10px 10px' }} />
                        <div style={{ display: 'block', marginLeft: '20px', marginTop: '23px' }}>
                            <p style={{ fontSize: '12px', fontWeight: 'bold', marginBottom: '3px' }}>JhonSmith007</p>
                            <p style={{ fontSize: '12px', color: 'grey' }}>United states, michigan</p>
                        </div>
                        <p style={{ fontSize: '12px', fontWeight: 'bold', marginTop: '27px', color: '#0095F6', cursor: 'pointer' }}>Follow</p>
                        <div></div>
                        <BiDotsHorizontalRounded onClick={() => setShowAction(true)} style={{ fontSize: '19px', marginTop: '25px', cursor: 'pointer' }} />
                    </div>

                    <div style={{ height: '560px', overflowY: 'scroll' }}>
                        <div style={commentDescription}>
                            <CircleImage src={ProfilePicture} customeStyle={{ width: '40px', height: '40px', margin: '10px 0px 10px 10px' }} />
                            <p style={{ fontSize: '12px', fontWeight: 'bold', marginTop: '25px' }}>JhonSmith007</p>
                            <div></div>
                            <p style={{ marginRight: '20px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sapien tellus, viverra in lectus quis, aliquam molestie ex. Curabitur non auctor justo, sit amet tincidunt orci. Maecenas non magna lacus. Phasellus a finibus felis. Nulla ut fringilla nibh. Fusce ut erat pellentesque, imperdiet erat at, suscipit arcu. Nulla quis tincidunt erat, id ullamcorper erat. Donec egestas semper risus, quis cursus neque tristique quis. Nam eget purus odio. Vivamus dignissim placerat tempus. Praesent in elementum est. Proin eu pellentesque nibh. Suspendisse ullamcorper metus et odio suscipit porttitor. Integer dignissim tincidunt blandit. </p>
                        </div>
                        <div style={{ display: 'block', marginTop: '40px' }}>
                            <div style={{ marginBottom: '20px' }}>
                                <div style={{ display: 'grid', gridTemplateColumns: '10% 15% 65% 10%' }}>
                                    <CircleImage src={ProfilePicture} customeStyle={{ width: '30px', height: '30px', margin: '10px' }} />
                                    <p style={{ marginLeft: '20px', marginTop: '20px', fontSize: '12px', fontWeight: '600' }}>JhonSmith</p>
                                    <p style={{ marginLeft: '20px', marginTop: '20px', fontSize: '12px' }}>This is a great dog!</p>
                                    <AiOutlineHeart size={15} style={{ margin: '0 auto', marginTop: '15px', cursor: 'pointer' }} />
                                </div>
                                <div style={{ marginLeft: '20px', display: 'grid', gridTemplateColumns: '10% 7% 13% 10% 10% auto' }}>
                                    <p></p>
                                    <p style={{ color: 'grey', fontWeight: '400' }}>5d</p>
                                    <p style={{ color: 'grey', fontWeight: '400' }}>82 likes</p>
                                    <p style={{ color: 'grey', fontWeight: '400', cursor: 'pointer' }}>Reply</p>
                                </div>
                            </div>
                        </div>
                        <div style={{ display: 'block', marginTop: '40px' }}>
                            <div style={{ marginBottom: '20px' }}>
                                <div style={{ display: 'grid', gridTemplateColumns: '10% 15% 65% 10%' }}>
                                    <CircleImage src={ProfilePicture} customeStyle={{ width: '30px', height: '30px', margin: '10px' }} />
                                    <p style={{ marginLeft: '20px', marginTop: '20px', fontSize: '12px', fontWeight: '600' }}>JhonSmith</p>
                                    <p style={{ marginLeft: '20px', marginTop: '20px', fontSize: '12px' }}>This is a great dog!</p>
                                    <AiOutlineHeart size={15} style={{ margin: '0 auto', marginTop: '15px', cursor: 'pointer' }} />
                                </div>
                                <div style={{ marginLeft: '20px', display: 'grid', gridTemplateColumns: '10% 7% 13% 10% 10% auto' }}>
                                    <p></p>
                                    <p style={{ color: 'grey', fontWeight: '400' }}>5d</p>
                                    <p style={{ color: 'grey', fontWeight: '400' }}>82 likes</p>
                                    <p style={{ color: 'grey', fontWeight: '400', cursor: 'pointer' }}>Reply</p>
                                </div>
                            </div>
                        </div>
                        <div style={{ display: 'block', marginTop: '40px' }}>
                            <div style={{ marginBottom: '20px' }}>
                                <div style={{ display: 'grid', gridTemplateColumns: '10% 15% 65% 10%' }}>
                                    <CircleImage src={ProfilePicture} customeStyle={{ width: '30px', height: '30px', margin: '10px' }} />
                                    <p style={{ marginLeft: '20px', marginTop: '20px', fontSize: '12px', fontWeight: '600' }}>JhonSmith</p>
                                    <p style={{ marginLeft: '20px', marginTop: '20px', fontSize: '12px' }}>This is a great dog!</p>
                                    <AiOutlineHeart size={15} style={{ margin: '0 auto', marginTop: '15px', cursor: 'pointer' }} />
                                </div>
                                <div style={{ marginLeft: '20px', display: 'grid', gridTemplateColumns: '10% 7% 13% 10% 10% auto' }}>
                                    <p></p>
                                    <p style={{ color: 'grey', fontWeight: '400' }}>5d</p>
                                    <p style={{ color: 'grey', fontWeight: '400' }}>82 likes</p>
                                    <p style={{ color: 'grey', fontWeight: '400', cursor: 'pointer' }}>Reply</p>
                                </div>
                            </div>
                        </div>
                        <div style={{ display: 'block', marginTop: '40px' }}>
                            <div style={{ marginBottom: '20px' }}>
                                <div style={{ display: 'grid', gridTemplateColumns: '10% 15% 65% 10%' }}>
                                    <CircleImage src={ProfilePicture} customeStyle={{ width: '30px', height: '30px', margin: '10px' }} />
                                    <p style={{ marginLeft: '20px', marginTop: '20px', fontSize: '12px', fontWeight: '600' }}>JhonSmith</p>
                                    <p style={{ marginLeft: '20px', marginTop: '20px', fontSize: '12px' }}>This is a great dog!</p>
                                    <AiOutlineHeart size={15} style={{ margin: '0 auto', marginTop: '15px', cursor: 'pointer' }} />
                                </div>
                                <div style={{ marginLeft: '20px', display: 'grid', gridTemplateColumns: '10% 7% 13% 10% 10% auto' }}>
                                    <p></p>
                                    <p style={{ color: 'grey', fontWeight: '400' }}>5d</p>
                                    <p style={{ color: 'grey', fontWeight: '400' }}>82 likes</p>
                                    <p style={{ color: 'grey', fontWeight: '400', cursor: 'pointer' }}>Reply</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{ display: 'block', border: 'solid 1px #DBDBDB', position: 'absolute', bottom: '0', width: '99.50%' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '8% 8% 8% 66% 10%' }}>
                            <AiOutlineHeart style={{ fontSize: '25px', margin: '10px' }} />
                            <AiOutlineComment style={{ fontSize: '25px', margin: '10px' }} />
                            <AiOutlineMessage style={{ fontSize: '25px', margin: '10px' }} />
                            <p></p>
                            <AiOutlineShareAlt style={{ fontSize: '25px', margin: '10px' }} />
                        </div>
                        <p style={{ fontSize: '13px', fontWeight: 'bold', margin: '15px' }}>10, 455 likes</p>
                        <p style={{ color: 'grey', marginLeft: '15px', marginBottom: '20px' }}>5 days ago</p>
                        <div style={commentSectionContainer}>
                            <AiOutlineSmile style={{ fontSize: 23, margin: '0 auto', marginTop: '10px' }} />
                            <AppInput type="text" placeholder="Add a comment ..." customeStyle={commentInputStyle} />
                            <p style={postButtonStyle}>Post</p>
                        </div>
                    </div>
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

const contentStyle = {
    backgroundColor: 'white',
    maxHeight: '90%',
    maxWidth: '75%',
    minWidth: '60%',
    minHeight: '800px',
    margin: '0 auto',
    marginTop: '20px',
    display: 'grid',
    gridTemplateColumns: 'auto 450px'
}

const assetContainer = {
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
}

const commentContainer = {
    display: 'block',
    position: 'relative'
}

const commentContainerHeader = {
    height: '65px',
    borderBottom: 'solid 1px #DBDBDB',
    display: 'grid',
    gridTemplateColumns: '10% 40% 10% 30% 10%'
}

const commentDescription = {
    display: 'grid',
    gridTemplateColumns: '15% 85%'
}

const commentSectionContainer = {
    border: 'solid 1px #EFEFEF',
    display: 'grid',
    gridTemplateColumns: '10% 80% 10%'
}

const postButtonStyle = {
    color: '#0095F6',
    marginTop: '18px',
    marginLeft: '5px',
    fontSize: '14px',
    cursor: 'pointer'
}

const commentInputStyle = {
    width: '98%',
    borderRadius: '0px',
    backgroundColor: 'white',
    border: 'none',
    fontSize: '14px',
    height: '50px'
}