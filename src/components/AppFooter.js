import React from 'react'
import {AiOutlineArrowDown} from "react-icons/ai";

export const AppFooter = () => {
    return (
        <div style={container}>
            <div style={content}>
                <div style={links}>
                    <p style={linkStyle}>Meta</p>
                    <p style={linkStyle}>About</p>
                    <p style={linkStyle}>Blog</p>
                    <p style={linkStyle}>Jobs</p>
                    <p style={linkStyle}>Help</p>
                    <p style={linkStyle}>API</p>
                    <p style={linkStyle}>Privacy</p>
                    <p style={linkStyle}>Terms</p>
                    <p style={linkStyle}>Top Accounts</p>
                    <p style={linkStyle}>Hashtags</p>
                    <p style={linkStyle}>Locations</p>
                    <p style={linkStyle}>Instagram Lite</p>
                </div>
                <div style={copyright}>
                    <p style={{ color: "#8E8E8E" }}>English <AiOutlineArrowDown /></p>
                    <p style={{ color: "#8E8E8E" }}>© 2022 InstaClone from Bader El Hayah</p>
                </div>
            </div>
        </div>
    )
}

const container = {
    backgroundColor: "#FAFAFA",
    marginTop: "8%"
}

const links = {
    display: "grid",
    gridTemplateColumns: "8% 8% 8% 8% 5% 5% 8% 8% 11% 8% 8% 11%",
}

const content = {
    maxWidth: "800px",
    minWidth: "600px",
    textAlign: "center",
    paddingTop: "10px",
    margin: "0 auto"
}

const copyright = {
    display: "grid",
    gridTemplateColumns: "15% 85%",
    width: "400px",
    margin: "0 auto",
    marginTop: "30px"
}

const linkStyle = {
    color: "#8E8E8E",
    cursor: "pointer",
    fontSize: "12px"
}