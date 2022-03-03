import { HiOutlineChevronDown } from 'react-icons/hi'
import { BsPencilSquare } from 'react-icons/bs'
import { BiMessageDetail } from 'react-icons/bi'
import { AppTopBar } from '../components/AppTopBar'
import { CircleImage } from '../components/CircleImage'

export const AppConversations = () => {

  return (
    <>
        <AppTopBar />
        <div style={container}>
            <div style={conversationsContainer}>
                <div style={profilesContainer}>
                    <div style={{ display:'grid', gridTemplateColumns: 'auto 10%', borderBottom: 'solid 1px #DBDBDB', textAlign: 'center', height: '45px', paddingTop: '20px' }}>
                        <p style={{ display: 'inline', fontSize: '14px', fontWeight: 'bold' }}>JhonSmith <HiOutlineChevronDown style={{ display: 'inline', fontSize: '20px', lineHeight: '2px' }} /></p>
                        <BsPencilSquare size={20} style={{ cursor: 'pointer' }} />
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '30% 30% 40%', borderBottom: 'solid 1px #DBDBDB'}}>
                        <div style={{ height: '27px', borderBottom: 'solid 1px black', textAlign: 'center', marginTop: '17px', cursor: 'pointer' }}>
                            <p style={{ fontSize: '15px' }}>PRIMARY</p>
                        </div>
                        <div style={{ height: '27px', textAlign: 'center', marginTop: '17px', cursor: 'pointer' }}>
                            <p style={{ fontSize: '15px', color: '#DBDBDB' }}>GENERAL</p>
                        </div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'auto' }}>
                        
                        <div style={{ display: 'grid', gridTemplateColumns: '25% 75%', paddingLeft: '15px', paddingTop: '15px', minWidth: '250px' }}>
                            <CircleImage />
                            <div style={{ display: 'grid', gridTemplateColumns: 'auto' }}>
                                <p style={{ fontSize: '14px', marginTop: '10px' }}>Will smith</p>
                                <p style={{ fontSize: '14px', color: '#DBDBDB' }}>You sent a message - 18h</p>
                            </div>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '25% 75%', paddingLeft: '15px', paddingTop: '15px', minWidth: '250px' }}>
                            <CircleImage />
                            <div style={{ display: 'grid', gridTemplateColumns: 'auto' }}>
                                <p style={{ fontSize: '14px', marginTop: '10px' }}>Will smith</p>
                                <p style={{ fontSize: '14px', color: '#DBDBDB' }}>You sent a message - 18h</p>
                            </div>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '25% 75%', paddingLeft: '15px', paddingTop: '15px', minWidth: '250px' }}>
                            <CircleImage />
                            <div style={{ display: 'grid', gridTemplateColumns: 'auto' }}>
                                <p style={{ fontSize: '14px', marginTop: '10px' }}>Will smith</p>
                                <p style={{ fontSize: '14px', color: '#DBDBDB' }}>You sent a message - 18h</p>
                            </div>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '25% 75%', paddingLeft: '15px', paddingTop: '15px', minWidth: '250px' }}>
                            <CircleImage />
                            <div style={{ display: 'grid', gridTemplateColumns: 'auto' }}>
                                <p style={{ fontSize: '14px', marginTop: '10px' }}>Will smith</p>
                                <p style={{ fontSize: '14px', color: '#DBDBDB' }}>You sent a message - 18h</p>
                            </div>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '25% 75%', paddingLeft: '15px', paddingTop: '15px', minWidth: '250px' }}>
                            <CircleImage />
                            <div style={{ display: 'grid', gridTemplateColumns: 'auto' }}>
                                <p style={{ fontSize: '14px', marginTop: '10px' }}>Will smith</p>
                                <p style={{ fontSize: '14px', color: '#DBDBDB' }}>You sent a message - 18h</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div style={mainMessageContainer}>
                    <BiMessageDetail style={{ fontSize: '80px' }} />
                    <p style={{ color: '#292929', fontSize: '20px', marginBottom: '10px', marginTop: '20px' }}>Your Messages</p>
                    <p style={{ color: '#909090', fontSize: '14px' }}>Send private photos and messages to a friend or group.</p>
                    <button style={{ backgroundColor: '#0095F6', color: 'white', fontWeight: 'bold', fontSize: '14px', padding: '7px', cursor: 'pointer', borderRadius: '5px', border: 'none', margin: '0 auto', marginTop: '20px' }}>Send Message</button>
                </div>
            </div>
        </div>
    </>
  )
}

const container = {
    backgroundColor: '#FAFAFA',
    height: '900px',
    display: 'block',
    paddingTop: '93px'
}

const conversationsContainer = {
    maxWidth: '930px',
    minWidth: '500px',
    minHeight: '500px',
    border: 'solid 1px #DBDBDB',
    backgroundColor: 'white',
    margin: '0 auto',
    borderRadius: '4px',
    display: 'grid',
    gridTemplateColumns: '340px auto'
}

const profilesContainer = {
    display: 'block'
}

const mainMessageContainer = {
    borderLeft: 'solid 1px #DBDBDB',
    display: 'block',
    paddingTop: '20%',
    textAlign: 'center'
}