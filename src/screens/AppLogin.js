import React from 'react'
import { AppInput } from '../components/AppInput'
import { AppSubmitButton } from '../components/AppSubmitButton'
import MainLogo from '../assets/img/instagram.png'

export const AppLogin = () => {
  return (
    <div style={container0}>
        <div style={{width: '400px', margin: '0 auto' }}>
            <div style={container1}>
                <img src={MainLogo} style={imgLogo} />
                <AppInput type="text" placeholder="Username" customeStyle={inputStyle} />
                <AppInput customeStyle={inputStyle} type="password" placeholder="Password" />
                <AppSubmitButton customeStyle={{ marginTop: 10 }} value="Log In" color="#0095F6" />
                <div style={seperator}></div>
                <p style={forgotPassStyle}>Forgot password ?</p>
                <p style={{ color: '#EB4D5A', maxWidth: '250px', margin: '0 auto', textAlign: 'center', marginTop: '20px' }}>Sorry, your password was incorrect. Please double-check your password.</p>
            </div>
            <div style={container2}>
                <h5>Don't have an account? <a style={{ color: '#0095F6', cursor: 'pointer' }}>Sign up</a></h5>
            </div>
        </div>
    </div>
  )
}

const container0 = {
    padding: 50,
    backgroundColor: '#FAFAFA',
    display: 'block',
    height: '800px'
}

const container1 = {
    marginTop: "5px",
    padding: 25,
    backgroundColor: 'white',
    maxWidth: '400px',
    border: 'solid 1px #DBDBDB',
}

const container2 = {
    padding: 25,
    backgroundColor: 'white',
    border: 'solid 1px #DBDBDB',
    textAlign: 'center',
    maxWidth: '400px',
    marginTop: '10px'
}

const imgLogo = {
    maxWidth: '200px',
    maxHeight: '100px',
    display: 'block',
    margin: '0 auto',
    marginBottom: '10px'
}

const seperator = {
    display: 'block',
    margin: '0 auto',
    marginTop: '20px',
    marginBottom: '20px',
    backgroundColor: 'grey',
    height: '1px',
}

const forgotPassStyle = {
    display: 'block',
    margin: '0 auto',
    textAlign:'center',
    marginTop: '20px'
}

const inputStyle = {
    width: '98%',
    marginTop: '5px',
    border: 'solid 1px #DEDEDE'
}