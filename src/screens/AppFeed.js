import React, { useState, useEffect } from 'react'
import { AppTopBar } from '../components/AppTopBar'
import { AppPost } from '../components/AppPost'
import { CircleImage } from '../components/CircleImage'
import ProfilePicture from '../assets/img/profile.jpg'
import { ActionModal } from '../components/ActionModal'
import { ModalPost } from "../components/ModalPost"

export const AppFeed = () => {

  const [showModalPost, setShowModalPost] = useState(false);

  const [windowDimenion, detectHW] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  })

  const [showExtra, setShowExtra] = useState(true)
  const [actionModal, setActionModal] = useState(false)

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
    <div style={containerStyle}>
        { showModalPost && <ModalPost onCloseClick={() => setShowModalPost(false)} /> }
        <AppTopBar />
        { actionModal && <ActionModal onCloseClick={() => setActionModal(false)} /> }
        <div style={postsContainerStyle}>
          <div style={{ display: 'grid', gridTemplateColumns: 'auto' }}>
            <AppPost onOptionClick={() => setActionModal(true)} onImageClick={() => setShowModalPost(true)} />
            <AppPost onOptionClick={() => setActionModal(true)} onImageClick={() => setShowModalPost(true)} />
            <AppPost onOptionClick={() => setActionModal(true)} onImageClick={() => setShowModalPost(true)} />
            <AppPost onOptionClick={() => setActionModal(true)} onImageClick={() => setShowModalPost(true)} />
            <AppPost onOptionClick={() => setActionModal(true)} onImageClick={() => setShowModalPost(true)} />
            <AppPost onOptionClick={() => setActionModal(true)} onImageClick={() => setShowModalPost(true)} />
            <AppPost onOptionClick={() => setActionModal(true)} onImageClick={() => setShowModalPost(true)} />
            <AppPost onOptionClick={() => setActionModal(true)} onImageClick={() => setShowModalPost(true)} />
            <AppPost onOptionClick={() => setActionModal(true)} onImageClick={() => setShowModalPost(true)} />
            <AppPost onOptionClick={() => setActionModal(true)} onImageClick={() => setShowModalPost(true)} />
            <AppPost onOptionClick={() => setActionModal(true)} onImageClick={() => setShowModalPost(true)} />
          </div>

          {
            showExtra && <div style={{ minWidth: '300px', maxWidth: '300px' }} >
                            <div style={firstSideRow}>
                              <CircleImage src={ProfilePicture} />
                              <div style={{ display: 'block', margin: '15px', marginLeft: '20px' }}>
                                <p style={{ marginBottom: '5px', fontSize: '13px', fontWeight: 'bold' }}>Jhon451</p>
                                <p style={{ color: '#8E8E8E', fontSize: '13px' }}>Jhon Smith</p>
                              </div>
                              <p style={{ color: '#0095f6', margin: '0 auto', marginTop: '15px', cursor: 'pointer', fontWeight: 'bold' }}>Switch</p>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '80% 20%', margin: '15px' }}>
                              <p style={{ color: '#A4A4A4', fontWeight: 'bold', fontSize: '14px', marginLeft: '8px' }}>Suggestions For You</p>
                              <p style={{ fontSize: '11px', cursor: 'pointer', fontWeight: 'bold' }}>See All</p>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '20% 60% 20%', margin: '25px' }}>
                              <CircleImage src={ProfilePicture} customeStyle={{ width: '30px', height: '30px' }} />
                              <div style={{ display: 'block' }}>
                                <p style={{ fontWeight: 'bold', marginBottom: '5px' }}>WillSmith</p>
                                <p style={{ color: '#A4A4A4' }}>Followed by Angel558</p>
                              </div>
                              <p style={{ fontSize: '12px', fontWeight: 'bold', color: '#0095f6', margin: '0 auto', marginTop: '10px' }}>Follow</p>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '20% 60% 20%', margin: '25px' }}>
                              <CircleImage src={ProfilePicture} customeStyle={{ width: '30px', height: '30px' }} />
                              <div style={{ display: 'block' }}>
                                <p style={{ fontWeight: 'bold', marginBottom: '5px' }}>WillSmith</p>
                                <p style={{ color: '#A4A4A4' }}>Followed by Angel558</p>
                              </div>
                              <p style={{ fontSize: '12px', fontWeight: 'bold', color: '#0095f6', margin: '0 auto', marginTop: '10px' }}>Follow</p>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '20% 60% 20%', margin: '25px' }}>
                              <CircleImage src={ProfilePicture} customeStyle={{ width: '30px', height: '30px' }} />
                              <div style={{ display: 'block' }}>
                                <p style={{ fontWeight: 'bold', marginBottom: '5px' }}>WillSmith</p>
                                <p style={{ color: '#A4A4A4' }}>Followed by Angel558</p>
                              </div>
                              <p style={{ fontSize: '12px', fontWeight: 'bold', color: '#0095f6', margin: '0 auto', marginTop: '10px' }}>Follow</p>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '20% 60% 20%', margin: '25px' }}>
                              <CircleImage src={ProfilePicture} customeStyle={{ width: '30px', height: '30px' }} />
                              <div style={{ display: 'block' }}>
                                <p style={{ fontWeight: 'bold', marginBottom: '5px' }}>WillSmith</p>
                                <p style={{ color: '#A4A4A4' }}>Followed by Angel558</p>
                              </div>
                              <p style={{ fontSize: '12px', fontWeight: 'bold', color: '#0095f6', margin: '0 auto', marginTop: '10px' }}>Follow</p>
                            </div>

                            <div style={{ margin: '25px', color: '#A4A4A4' }}>
                              <div style={{ display: 'grid', gridTemplateColumns: 'auto auto auto auto auto' }}>
                                <p>- About</p><p>- Help</p><p>- Press</p><p>- API</p><p>- Jobs</p>
                              </div>

                              <div style={{ display: 'grid', gridTemplateColumns: 'auto auto auto auto auto auto auto' }}>
                                <p>- Accounts</p><p>- Hashtags</p><p>- Language</p> <p>- Privacy</p>
                              </div>

                              <div style={{ display: 'grid', gridTemplateColumns: 'auto', marginTop: '10px' }}>
                                <p>Made by Bader El Hayah</p>
                              </div>

                            </div>

                          </div>
          }

        </div> 
    </div>
  )
}

const containerStyle = {
  backgroundColor: '#FAFAFA',
  paddingBottom: '100px'
}

const postsContainerStyle = {
  display: 'grid',
  gridTemplateColumns: 'auto auto',
  paddingTop: '100px',
  maxWidth: '900px',
  margin: '0 auto'
}

const firstSideRow = {
    display: 'grid',
    gridTemplateColumns: '20% 60% 20%',
    margin: '20px'
}