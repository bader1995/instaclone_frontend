import React, {useState} from 'react'
import UploadImage from '../assets/img/uploadImg.svg'
import { FiUpload, GrImage, IconName, IoIosImages } from "react-icons/io"
import { AiOutlineClose } from 'react-icons/ai'
import { getDatabase, ref, set, get } from 'firebase/database'
import { getStorage, uploadBytes, ref as ref_storage, getDownloadURL } from "firebase/storage"
import loaderPic from '../assets/loader.svg'

export const AddPost = ({ onCloseClick }) => {

    const [picture, setPicture] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)

    const db = getDatabase()

    const createPost = () => {

        if(!picture)
        {
            setError("Please choose a picture first!")
            return
        }

        setLoading(true)
        
        const storage = getStorage();
        const storageRef = ref_storage(storage, picture.name);

        uploadBytes(storageRef, picture).then((snapshot) => {
            getDownloadURL(snapshot.ref)
            .then((url) => {
                
                const id = Math.floor(Math.random() * 1000)

                set(ref(db, 'instaclone/files/pictures/' + id), {
                    id: id,
                    name: picture.name,
                    url: url
                })
                .then(() => setSuccess("Picture has been posted successfully!"))
                .catch((error) => setError(error))

            })
        })
        .catch((error) => setError(error))
        .finally(() => {
            setLoading(false)
        })

    }
    
  return (
    <div style={containerStyle}>
        <AiOutlineClose size={30} style={{ marginTop: '12px', marginRight: '15px', cursor: 'pointer', float: 'right', color: 'white' }} onClick={() => onCloseClick()} />
        <div style={actionStyle}>
            <div style={{ display: 'grid', gridTemplateColumns: 'auto 6%', textAlign: 'center', borderBottom: 'solid 1px #DBDBDB', height: '45px' }}>
                <p style={{ fontSize: '16px', fontWeight: '400', marginTop: '15px' }}>Create new post</p>
            </div>
            <div style={{ textAlign: 'center' }}>
                <p>{ loading && <img src={loaderPic} width={50} style={{ alignSelf: "center" }} /> }</p>
                <IoIosImages style={{ fontSize: '80px' }} />
                <p style={{ display: 'block', marginBottom: '20px', marginTop: '10px', fontSize: '16px' }}>Drag photos and videos here</p>
                <input onChange={(e) => setPicture(e.target.files[0])} type="file" />
                <input style={{ marginLeft: 10,backgroundColor: '#0095F6', color: 'white', border: 'none', padding: '8px 15px 5px 15px', fontSize: '14px', borderRadius: '4px', cursor:'pointer' }} type="button" value="Post" onClick={() => createPost()} />
                { error && <p style={{ color: 'red', marginTop: 15 }}>{error}</p> }
                { success && <p style={{ color: 'green', marginTop: 15 }}>{success}</p> }
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
    marginTop: '10%',
}