import React from 'react'
import { AppInput } from '../components/AppInput'
import { AppSubmitButton } from '../components/AppSubmitButton'
import MainLogo from '../assets/img/instagram.png'

export const AppLogin = () => {
  return (
    <div style={container0}>
        <div style={container1}>
            <img src={MainLogo} style={imgLogo} />
            <AppInput type="text" placeholder="Username" />
            <AppInput customeStyle={{ marginTop: 5 }} type="password" placeholder="Password" />
            <AppSubmitButton customeStyle={{ marginTop: 10 }} value="Log In" color="#0095F6" />
            <div style={seperator}></div>
            <p style={forgotPassStyle}>Forgot password ?</p>
        </div>
        <div style={container2}>
            <h5>Don't have an account? <a>Sign up</a></h5>
        </div>
    </div>
  )
}

const container0 = {
    padding: 50,
    backgroundColor: '#FAFAFA',
}

const container1 = {
    marginTop: "5px",
    padding: 25,
    backgroundColor: 'white',
    display: 'block',
    maxWidth: '400px',
    border: 'solid 1px #DBDBDB',
    margin: '0 auto'
}

const container2 = {
    padding: 25,
    backgroundColor: 'white',
    border: 'solid 1px #DBDBDB',
    textAlign: 'center',
    display: 'block',
    maxWidth: '400px',
    margin: '0 auto',
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