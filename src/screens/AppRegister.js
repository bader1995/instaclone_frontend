import MainLogo from "../assets/img/instagram.png"
import {AppSubmitButton} from "../components/AppSubmitButton"
import React, {useState} from "react"
import {getDatabase, ref, set} from "firebase/database"
import {Link} from "react-router-dom"
import loaderPic from '../assets/loader.svg'

export const AppRegister = () =>
{
    const [email, setEmail] = useState("")
    const [fullName, setFullName] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)
    const [loading, setLoading] = useState(false)

    const register = () => {

        setLoading(true)

        const db = getDatabase();

        const id = Math.floor(Math.random() * 1000)

        set(ref(db, 'instaclone/users/' + id), {
            id: id,
            email: email,
            fullName: fullName,
            username: username,
            password: password
        })
        .then(() => setSuccess("The account has been created!"))
        .catch((error) => setError(error))
        .finally(() => setLoading(false))
    }

    return (
        <div style={container0}>
            <div style={{width: '400px', margin: '0 auto' }}>
                <div style={container1}>
                    { loading && <img src={loaderPic} width={50} style={{ alignSelf: "center" }} /> }
                    <img src={MainLogo} style={imgLogo} />
                    <input placeholder="Email address" style={inputStyle} type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input placeholder="Full name" style={inputStyle} type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />
                    <input placeholder="Username" style={inputStyle} type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <input placeholder="password" style={inputStyle} type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <AppSubmitButton onClick={() => register()} customeStyle={{ marginTop: 10 }} value="Register" color="#0095F6" />
                    <div style={seperator}></div>
                    { error && <p style={{ color: '#EB4D5A', maxWidth: '250px', margin: '0 auto', textAlign: 'center', marginTop: '20px' }}>{error}</p> }
                    { success && <p style={{ color: 'green', maxWidth: '250px', margin: '0 auto', textAlign: 'center', marginTop: '20px' }}>{success}</p> }
                </div>
                <div style={container2}>
                    <h5>Have an account? <Link to="/login" style={{ color: '#0095F6', cursor: 'pointer' }}>Log In</Link></h5>
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