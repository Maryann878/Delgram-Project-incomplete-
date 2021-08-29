import React from 'react'
import './Online.css'
const imgPath = process.env.PUBLIC_URL;

function Online() {
    return (
        <div className="container Online-container">
            <div className="row mx-auto">
                <img src={`${imgPath}./img/Profile.jpg`} alt="" className="Profile_thumbnai" />
            </div>
                 
        </div>
    )
}

export default Online
