import React, { useState } from 'react'
import {AppTopBar} from "../components/AppTopBar";
import {CircleImage} from "../components/CircleImage";
import {AiOutlineSave, AiOutlineSetting, AiOutlineUser} from "react-icons/ai";
import {BsPlusSquare} from "react-icons/bs";
import { ActionSettingsModal } from '../components/ActionSettingsModal';

import PostsPicture from "../assets/img/postsPicture.jpg";
import DownloadFromApple from "../assets/img/downloadFromApple.png";
import DownloadFromGoogle from "../assets/img/downloadFromGoogle.png";
import {AppFooter} from "../components/AppFooter";
import AionyPic from "../assets/img/aiony.jpg";

export const AppProfile = () => {

    const [showActionModal, setShowActionModal] = useState(false)

    return (
        <div style={mainContainer}>
            { showActionModal && <ActionSettingsModal onCloseClick={() => setShowActionModal(false)}/> }
            <AppTopBar />
            <div style={contentContainer}>
                <CircleImage customeStyle={{ width: "150px", height: "150px" }} src={AionyPic} />
                <div style={infoContainer}>

                    <div style={firstSection}>
                        <p style={{ fontSize: "20px", marginTop: "5px" }}>Aiony</p>
                        <button style={editButton}>Edit profile</button>
                        <AiOutlineSetting style={{ fontSize: "25px", margin: "0 auto", cursor: "pointer" }} onClick={() => setShowActionModal(true)} />
                    </div>

                    <div style={secondSection}>
                        <p style={{ fontSize: "16px" }}><span style={{ fontSize: "16px", fontWeight: "bold" }}>0</span> posts</p>
                        <p style={{ fontSize: "16px", cursor: "pointer" }}><span style={{ fontSize: "16px", fontWeight: "bold" }}>24</span> followers</p>
                        <p style={{ fontSize: "16px", cursor: "pointer" }}><span style={{ fontSize: "16px", fontWeight: "bold" }}>76</span> following</p>
                    </div>

                    <div style={thirdSection}>
                        <p style={{ fontWeight: "bold", fontSize: "15px" }}>Aiony Doe</p>
                        <p style={{ fontSize: "15px", color: "#b1acac", marginTop: "8px" }}>Science, Technology & Engineering</p>
                        <p style={{ fontSize: "15px", marginTop: "8px" }}>Engineering is the closest thing to magic that exists in the world!</p>
                    </div>

                </div>
            </div>
            <div style={bottomContainer}>

                <div style={selectorSection}>
                    <p></p>
                    <div style={{ cursor: "pointer", fontSize: "13px", borderTop: "solid 1px black", textAlign: "center", paddingTop: "20px" }}><BsPlusSquare />  POSTS</div>
                    <div style={{ cursor: "pointer", fontSize: "13px", color: "#DBDBDB", textAlign: "center", paddingTop: "20px" }}><AiOutlineSave />  SAVED</div>
                    <div style={{ cursor: "pointer", fontSize: "13px", color: "#DBDBDB", textAlign: "center", paddingTop: "20px" }}><AiOutlineUser/>  TAGGED</div>
                    <p></p>
                </div>

                <div style={postsContainer}>
                    <div style={{ width: "100%", height: "350px", backgroundImage: `url(${PostsPicture})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}></div>
                    <div style={{ backgroundColor: "white", width: "100%", height: "100%", display: "block", textAlign: "center" }}>
                        <p style={{ fontSize: "16px", fontWeight: "bold", marginTop: "120px" }}>Start capturing and sharing your moments.</p>
                        <p style={{ fontSize: "15px", marginTop: "10px" }}>Get the app to share your first photo or video.</p>
                        <div style={{ display: "grid", gridTemplateColumns: "150px 150px", width: "300px", margin: "0 auto", marginTop: "30px" }}>
                            <img src={DownloadFromApple} style={{ width: "125px", cursor: "pointer" }} />
                            <img src={DownloadFromGoogle} style={{ width: "125px", cursor: "pointer" }} />
                        </div>
                    </div>
                </div>

            </div>
            <AppFooter />
        </div>
    )
}

const mainContainer = {
    backgroundColor: "#FAFAFA",
    height: "800p",
    display: "block",
    paddingBottom: "80px"
}

const contentContainer = {
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "30% 70%",
    paddingTop: "100px",
    maxWidth: "800px",
    minWidth: "750px"
}

const infoContainer = {
    display: "block"
}

const firstSection = {
    display: "grid",
    gridTemplateColumns: "30% 20% 5% 35%",
}

const editButton = {
    backgroundColor: "white",
    fontSize: "14px",
    width: "100px",
    paddingTop: "5px",
    paddingBottom: "3px",
    border: "solid 1px #DBDBDB",
    borderRadius: "4px",
    cursor: "pointer"
}

const secondSection = {
    display: "grid",
    gridTemplateColumns: "20% 20% 20% 40%",
    marginTop: "30px"
}

const thirdSection = {
    display: "grid",
    gridTemplateColumns: "100%",
    marginTop: "30px"
}

const bottomContainer = {
    borderTop: "solid 1px #DBDBDB",
    maxWidth: "800px",
    minWidth: "600px",
    margin: "0 auto",
    marginTop: "40px"
}

const selectorSection = {
    display: "grid",
    gridTemplateColumns: "35% 10% 10% 10% 35%",
}

const postsContainer = {
    display: "grid",
    gridTemplateColumns: "45% 55%",
    marginTop: "20px"
}