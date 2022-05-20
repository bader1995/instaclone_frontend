import {FaComment, FaImages} from "react-icons/fa"
import React, {useState} from 'react'

export const PostComponent = ({ url, id }) => {
    
    return (
        <div style={{ ...imageContainer, backgroundImage: `url(${url})` }}>
            <FaImages size={27} style={{ float: 'right', marginRight: '10px', marginTop: '10px', color: 'white' }} />
        </div>
    )

}

const imageContainer = {
    height: '300px',
    margin: '10px',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    cursor: 'pointer'
}