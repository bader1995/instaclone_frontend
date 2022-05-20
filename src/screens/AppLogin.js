import React, {useState} from 'react'
import { AppSubmitButton } from '../components/AppSubmitButton'
import MainLogo from '../assets/img/instagram.png'
import { getDatabase, get, ref, set } from "firebase/database"
import {Link, useNavigate} from "react-router-dom"
import loaderPic from '../assets/loader.svg'

export const AppLogin = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)
  const [isLogged, setIsLogged] = useState(false)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const login = () => {

      const db = getDatabase()

      setLoading(true)

      get(ref(db, 'instaclone/users'))
          .then((snapshot) => {

              const data = snapshot.val()

              Object.keys(data).map((key, index) => {

                let item = data[key]

                if( item.email === email && item.password === password )
                {
                    setIsLogged(true)
                    navigate("/explore")
                }

              })

          })
          .catch((error) => {
              setError(error)
          })
          .finally(() => {

            if(!isLogged)
            {
              setError("Password / Email is incorrect!")
            }

            setLoading(false)

          })
  }

  return (
    <div style={container0}>
        <div style={{width: '400px', margin: '0 auto' }}>
            <div style={container1}>
                { loading && <img src={loaderPic} width={50} style={{ alignSelf: "center" }} /> }
                <img src={MainLogo} style={imgLogo} />
                <input placeholder="Phone number, username, or email" style={inputStyle} type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input placeholder="Password" style={inputStyle} type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <AppSubmitButton onClick={() => login()} customeStyle={{ marginTop: 10 }} value="Log In" color="#0095F6" />
                <div style={seperator}></div>
                <p style={forgotPassStyle}>Forgot password ?</p>
                { error && <p style={{ color: '#EB4D5A', maxWidth: '250px', margin: '0 auto', textAlign: 'center', marginTop: '20px' }}>{error}</p> }
            </div>
            <div style={container2}>
                <h5>Don't have an account? <Link to="/register" style={{ color: '#0095F6', cursor: 'pointer' }}>Sign up</Link></h5>
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
    textAlign: "center"
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
    backgroundColor: "#FAFAFA",
    display: "block",
    width: '96%',
    borderWidth: 0.1,
    borderRadius: 3,
    borderColor: "#dbdbdb",
    marginTop: 10,
    padding: 10
}